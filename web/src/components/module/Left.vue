<template>
	
		<el-col :span="5">
			<el-menu default-active="2" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
				<el-submenu v-for="item in menusList" :index="'/home'+item.URL">
					<template slot="title">
						<span>{{item.NAME}}</span>
					</template>
					<el-menu-item-group v-if="item.dataSon">
						<el-menu-item :index="'/home'+subItem.URL" v-for="subItem in item.dataSon">{{subItem.NAME}}
							<!--<router-link :to="{path:'vue'+subItem.URL ,query:''}">{{subItem.NAME}}</router-link>-->
						</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-col>

	
	
</template>

<script>
	export default {
		name: 'Left',
		data() {
			return {
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
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}

	}
</script>
<style>

</style>