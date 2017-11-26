<template>
	<div><button @click="next()">管理界面</button></div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {

			}
		},
		created() {
			console.log(this.getStatus(this.$route.path))
		},
		methods: {
			next() {
				this.$router.push("/home");
			}
		}
	}
</script>

<style>

</style>