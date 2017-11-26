<template>
	<div style="margin-top:5px">
		<el-row :gutter="10">
			<el-col :xs="4" :sm="4" :md="4" :lg="4">
				<div>
					<el-menu default-active="1" class="el-menu-vertical" style="min-height:800px">
						<el-menu-item v-for="item in menusList">{{item.NAME}}
							<el-menu-item v-for="iter in menusList.dataSon">{{iter.NAME}}</el-menu-item>
						</el-menu-item>
						<!--<el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
						<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>-->
					</el-menu>
				</div>
			</el-col>
			<el-col :xs="20" :sm="20" :md="20" :lg="20">
				<div>
					<div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
						<el-breadcrumb separator="/">
							<el-breadcrumb-item v-for="item in breadcrumbItems">{{item}}</el-breadcrumb-item>
						</el-breadcrumb>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'Left',
		data() {
			return {
				breadcrumbItems: [],
				menusList: []
			}
		},
		mounted: function() {
			this.getMenu();
		},
		methods: {
			getMenu() {
				var menuApi = this.Consts.HOST + this.Consts.ADMIN.MENU_LIST;
				var params = {};
				params.id = 0;
				params.enabled = 0;
				this.$http.get(
					menuApi, {
						params: params
					}

				).then(function(response) {
					this.menusList = response.data;
				}, function(erro) {

				}).catch();
			}

		}

	}
</script>

<style>

</style>