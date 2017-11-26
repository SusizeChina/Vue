<template>
	<div style="background-color: #EBEBEB;min-height:800px">
		<Top></Top>
		<Left></Left>
		<div class="right">
			<transition name="fade" mode="out-in">
				<router-view keep-alive class="view"></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	import Top from './Top.vue'
	import Left from './Left.vue'
	export default {
		name: 'Home',
		data() {
			return {

			}
		},
		components: {
			Top,
			Left
		}
	}
</script>

<style>
</style>