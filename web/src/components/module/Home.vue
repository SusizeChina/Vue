<template>
	<div style="background-color:slategray;min-height:800px">
		<Top></Top>
		<Left></Left>
		<Rigth></Rigth>
	</div>
</template>

<script>
	import Top from './Top.vue'
	import Left from './Left.vue'
	import Right from './Right.vue'
	export default {
		name: 'Home',
		data() {
			return {
				props: {
					index: String | Number,
					subindex: String | Number
				}
			}
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