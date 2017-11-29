// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)

Vue.prototype.Consts = {
	HOST: "http://127.0.0.1:8080",
	MENU_LIST: {},
	ADMIN: {
		LOGIN: "/magus/adminLoginSubmit", //后台登录
		MENU_LIST: "/magus/admin/manage/auth/menu/loadSonsByIdNew", //获取菜单列表
		GET_BUNDLE: "/magus/admin/manage/bundle/list",
		HTTP_URL: "/magus/admin/manage/httpurl/list",
		UPDATE_HTTPURL: "/magus/admin/manage/httpurl/update",
		LIST_SERVICE: "/magus/admin/manage/bundle/listService",
		LIST_API: "/magus/admin/manage/api/list",
		LIST_APITYPE: "/magus/admin/manage/apitype/list"
	},
};
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
}).$mount('#app')