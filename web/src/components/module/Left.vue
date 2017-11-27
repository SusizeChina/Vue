<template>
	<el-row>
		<el-col :span="5">
			<el-menu default-active="2" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
				<el-submenu v-for="item in menusList" :index="'vue'+item.URL">
					<template slot="title">
						<span>{{item.NAME}}</span>
					</template>
					<el-menu-item-group v-if="item.dataSon">
						<el-menu-item :index="'vue'+subItem.URL" v-for="subItem in item.dataSon">{{subItem.NAME}}</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-menu-item :index="'/login'">测试跳转</el-menu-item>
			</el-menu>
		</el-col>

		<el-col :span="19">
			<div class="rightBox" style="background-color:aqua;height: 800px; widows: 100%;">

				<router-view keep-alive class="view"></router-view>

			</div>
		</el-col>
	</el-row>
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
					var menu = response.data;
					var api = [];
					for(var index in menu) {
						var dataSon = menu[index].dataSon;
						for(var ind in dataSon) {
							api.push(dataSon[ind].url);
						}
					}
					var json = JSON.stringify(api);
					console.log(json);
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
	/*.leftBox {
		width: 100%;
		height: auto;
		border-right: 1px solid #dfdfdf;
		position: absolute;
		top: 9%;
		left: 0.6%;
		bottom: 0;
	}
	
	.rightBox {
		width: 100px;
		height: 100px;
		position: absolute;
		left: 1500px;
		top: 12%;
		bottom: 0;
		right: 0;
		padding: 10px;
		overflow-y: scroll;
		background-color: crimson;
	}*/
</style>