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
		MENU_LIST: "/magus/admin/manage/auth/menu/loadSonsByIdNew" //获取菜单列表
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
})