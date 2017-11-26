import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/module/Home'
import Login from '@/components/module/Login'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		}
	]
})