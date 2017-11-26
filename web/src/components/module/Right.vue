<template>
	<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
		<div class="grid-content bg-purple-light"></div>
		<!--	<div>
			<div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
				<el-breadcrumb separator="/">
					<el-breadcrumb-item v-for="item in breadcrumbItems">{{item}}</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</div>
		<div style="margin-top:10px">
			<router-view></router-view>
		</div>-->
	</el-col>

</template>

<script>
	export default {
		name: 'Rigth',
		data() {
			return {
				breadcrumbItems: [1, 2, 3]
			}
		}
	}
</script>

<style>

</style>