<template>
	<div style="width:100%;background-color: #636363; overflow: hidden">
		<span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:1%">
                管理平台
            </span>
		<span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:15%">
                <el-input
                        placeholder="请输入"
                        icon="search"
                        v-model="searchCriteria"
                        :on-icon-click="handleIconClick">
                </el-input>
            </span>
		<span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    admin<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
		<el-dropdown-menu slot="dropdown">
			<el-dropdown-item>个人信息</el-dropdown-item>
			<el-dropdown-item @click.native="LoginOut()">退出登录</el-dropdown-item>
		</el-dropdown-menu>
		</el-dropdown>
		</span>
	</div>
</template>

<script>
	export default {
		name: 'Top',
		data() {
			return {

			}
		},
		methods: {
			LoginOut() {
				this.$router.push('/login');
			}
		}
	}
</script>

<style>

</style>