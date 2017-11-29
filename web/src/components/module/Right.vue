<template>
	<el-col :span="19" class="rightBox">
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</el-col>
</template>

<script>
	export default {
		name: 'Rigth',
		data() {
			return {}
		}
	}
</script>

<style>
	.rightBox {
		height: auto;
		widows: 100%;
	}
</style>