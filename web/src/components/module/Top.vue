<template>
	<el-row>
		<el-col :span="24">
			<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
				<el-col :span="8" class="left">
					管理平台
				</el-col>
				<el-col :span="8" class="center">
					<el-input placeholder="请输入" icon="search" v-model="searchCriteria" :on-icon-click="handleIconClick">
					</el-input>
				</el-col>
				<el-col :span="5">
					<el-submenu index="2" class="right">
						<template slot="title">个人信息</template>
						<el-menu-item index="2-2">个人详情</el-menu-item>
						<el-menu-item index="2-1">退出登录</el-menu-item>
					</el-submenu>
				</el-col>
			</el-menu>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: 'Top',
		data() {
			return {
				searchCriteria: '',
				activeIndex: '1',
				activeIndex2: '1'
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			handleIconClick() {}
		}
	}
</script>
<style>
	.center {
		float: left;
		padding-top: 10px;
		color: white;
		margin-left: 5%;
		align-content: center;
	}
	
	.left {
		float: left;
		padding-top: 20px;
		color: white;
		align-content: center;
	}
	
	.right {
		float: right;
		padding-right: 0px;
		color: white;
		align-content: center;
	}
</style>