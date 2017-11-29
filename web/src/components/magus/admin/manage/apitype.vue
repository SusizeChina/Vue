<template>
	<el-table :data="tableData" style="width: 100%" height="1300" stripe>
		<el-table-column prop="ID" label="编号 " sortable>
		</el-table-column>
		<el-table-column prop="NAME" label="分类名称 " sortable>
		</el-table-column>
		<el-table-column prop="DESCRIPTION" label="分类描叙 " sortable>
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		name: 'apitype',
		data() {
			return {
				tableData: []
			}
		},
		mounted: function() {
			this.getApitype();
		},
		methods: {
			getApitype() {
				var getApitypeUrl = this.Consts.HOST + this.Consts.ADMIN.LIST_APITYPE;
				this.$http.get(getApitypeUrl, {}).then(function(data) {
					this.tableData = data.data;
				}, function(erro) {}).catch();
			}
		}
	}
</script>