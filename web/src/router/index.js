import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/module/Home'
import Login from '@/components/module/Login'

import api from '@/components/magus/admin/manage/api'
import apitype from '@/components/magus/admin/manage/apitype'
import bundle from '@/components/magus/admin/manage/bundle'
import erro from '@/components/magus/admin/manage/error'
import httpurl from '@/components/magus/admin/manage/httpurl'
import service from '@/components/magus/admin/manage/service'

import app from '@/components/magus/admin/manage/auth/app'
import menu from '@/components/magus/admin/manage/auth/menu'
import role from '@/components/magus/admin/manage/auth/role'
import user from '@/components/magus/admin/manage/auth/user'
import usergroup from '@/components/magus/admin/manage/auth/usergroup'

Vue.use(Router)

export default new Router({
	base: __dirname,
	mode: 'history',
	routes: [{
		path: '/',
		component: Home,
		iconCls: 'el-icon-message', //图标样式class
		children: [{
			path: '/home/admin/manage/api',
			component: api
		}, {
			path: '/home/admin/manage/apitype',
			component: apitype
		}, {
			path: '/home/admin/manage/bundle',
			component: bundle
		}, {
			path: '/home/admin/manage/error',
			component: erro
		}, {
			path: '/home/admin/manage/httpurl',
			component: httpurl
		}, {
			path: '/home/admin/manage/service',
			component: service
		}]
	}]
})