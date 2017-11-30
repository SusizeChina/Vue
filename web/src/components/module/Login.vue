<template>
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
		<h3 class="title">系统登录</h3>
		<el-form-item prop="user_name">
			<el-input type="text" v-model="ruleForm.user_name" auto-complete="off" placeholder="账号"></el-input>
		</el-form-item>
		<el-form-item prop="user_pass">
			<el-input type="password" v-model="ruleForm.user_pass" auto-complete="off" placeholder="密码"></el-input>
		</el-form-item>
		<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
		<el-form-item style="width:100%;">
			<el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import { mapActions } from 'vuex'
	import { USER_SIGNIN } from 'store/user'
	export default {
		name: 'Login',
		data() {
			return {
				checked: true,
				logining: false,
				ruleForm: {
					user_name: "",
					user_pass: "",
					isLogin: "y"
				},
				rules: {
					user_name: [{
						required: true,
						message: '请输入账号',
						trigger: 'blur'
					}],
					user_pass: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}]
				}
			}
		},
		created() {

		},
		methods: {
			...mapActions([USER_SIGNIN]),
			handleSubmit(ev) {
				this.$refs.ruleForm.validate((valid) => {
					if(valid) {
						this.USER_SIGNIN(this.ruleForm)
						this.$router.push({
							path: '/'
						});
						//						this.logining = true;
						//						var loginApi = this.Consts.HOST + this.Consts.ADMIN.LOGIN;
						//						this.$http.get(
						//							loginApi, {
						//								params: this.ruleForm
						//							}
						//						).then(function(data) {
						//
						//						}, function(erro) {
						//							console.log('error submit11!!');
						//						}).catch();
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
	}
</script>

<style>
	.login-container {
		/*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
		-webkit-border-radius: 5px;
		border-radius: 5px;
		-moz-border-radius: 5px;
		background-clip: padding-box;
		margin: 180px auto;
		width: 350px;
		padding: 35px 35px 15px 35px;
		background: #fff;
		border: 1px solid #eaeaea;
		box-shadow: 0 0 25px #cac6c6;
		.title {
			margin: 0px auto 40px auto;
			text-align: center;
			color: #505458;
		}
		.remember {
			margin: 0px 0px 35px 0px;
		}
	}
</style>