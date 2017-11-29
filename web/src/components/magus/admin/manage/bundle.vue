<template>
	<el-table :data="tableData" style="width: 100%" height="1300" stripe>
		<el-table-column prop="id" label="编号" sortable>
		</el-table-column>
		<el-table-column prop="symbolicName" label="名称" sortable>
		</el-table-column>
		<el-table-column prop="state" label="状态" sortable :formatter="formatter">
		</el-table-column>
		<el-table-column prop="startLevel" label="启动级别" sortable>
		</el-table-column>
		<el-table-column prop="lastModifiedTime" label="最后修改时间 " sortable>
		</el-table-column>
		<el-table-column prop="desc" label="描述">
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		name: 'bundle',
		data() {
			return {
				tableData: []
			}
		},
		mounted: function() {
			this.getBundle();
		},
		methods: {
			formatter(row, column) {
				if(row.state == '32') {
					return '正常';
				} else {
					return '失败';
				}
			},
			getBundle() {
				var getBundleApi = this.Consts.HOST + this.Consts.ADMIN.GET_BUNDLE;
				this.$http.get(getBundleApi, {}).then(function(data) {
					this.tableData = data.data;
				}, function(erro) {}).catch();
			}
		}
	}
</script>