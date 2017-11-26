<template>
	<div style="width:100%;background-color: #636363; overflow: hidden">

		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:5%">
                管理平台
            </span>
			<span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:20%">
                <el-input
                        placeholder="请输入"
                        icon="search"
                        v-model="searchCriteria"
                        :on-icon-click="handleIconClick">
                </el-input>
            </span>
			<el-menu-item index="1">处理中心</el-menu-item>
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
			</el-submenu>
			<el-menu-item index="3">
				<a href="https://www.ele.me" target="_blank">订单管理</a>
			</el-menu-item>
		</el-menu>
	</div>
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