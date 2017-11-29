<template>
	<el-row class="tac">
		<el-col :span="24">
			<Top></Top>
			<el-row>
				<Left></Left>
				<Right></Right>
			</el-row>
		</el-col>
	</el-row>
</template>

<script>
	import Top from './Top.vue'
	import Left from './Left.vue'
	import Right from './Right.vue'
	export default {
		name: 'Home',
		data() {
			return {

			}
		},
		props: {
			index: String | Number
		},
		components: {
			Top,
			Left,
			Right
		}
	}
</script>

<style>

</style>