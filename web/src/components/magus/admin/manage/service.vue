<template>
	<el-table :data="tableData" style="width: 100%" height="1300" stripe>
		<el-table-column prop="service.id" label="服务ID " sortable>
		</el-table-column>
		<el-table-column prop="service_Name" label="服务名称 " sortable>
		</el-table-column>
		<el-table-column prop="objectClass" label="父类/接口 " sortable>
		</el-table-column>
		<el-table-column prop="Bundle-Version" label="插件版本" sortable>
		</el-table-column>
		<el-table-column prop="Bundle-SymbolicName" label="所属插件 " sortable>
		</el-table-column>
		<el-table-column prop="desc" label="服务描述 " sortable>
		</el-table-column>

	</el-table>
</template>

<script>
	export default {
		name: 'service',
		data() {
			return {
				tableData: []
			}
		},
		mounted: function() {
			this.getService();
		},
		methods: {
			getService() {
				var getServiceApi = this.Consts.HOST + this.Consts.ADMIN.LIST_SERVICE;
				this.$http.get(getServiceApi, {}).then(function(data) {
					this.tableData = data.data;
				}, function(erro) {}).catch();
			}
		}
	}
</script>