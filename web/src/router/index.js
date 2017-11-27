import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/module/Home'
import Login from '@/components/module/Login'
import bundle from '@/components/magus/admin/manage/bundle'
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/vue',
			children: [{
				path: '/admin',
				children: [{
					path: '/manage',
					children: [{
						path: '/bundle',
						component: bundle
					}]
				}]

			}]

		},
		{
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
			path: '/vue/admin/manage/bundle',
			name: 'bundle',
			component: bundle
		}
	]
})