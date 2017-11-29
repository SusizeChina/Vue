<template>
	<el-row class="tac">
		<el-col :span="24">
			<el-button type="success" plain @click="dialogFormVisible = true">修改</el-button>
		</el-col>
		<el-col :span="24">
			<el-table :data="tableData" height="1000" ref="singleTable" stripe @current-change="currentPage" highlight-current-row tyle="width: 100%">
				<el-table-column prop="ID" label="编号" sortable>
				</el-table-column>
				<el-table-column prop="BUNDLE_NAME" label="插件名称" sortable>
				</el-table-column>
				<el-table-column prop="RESOURCE_URL" label="资源地址" sortable>
				</el-table-column>
				<el-table-column prop="RESOURCE_DESC" label="资源描叙" sortable>
				</el-table-column>
			</el-table>
		</el-col>
		<el-col :span="24">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-sizes="[10, 20, 50, 100]" :page-size="rows" layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>
		</el-col>
		<el-col :span="24">
			<el-dialog title="API详细信息" :visible.sync="dialogFormVisible">
				<el-form :label-position="'right'" label-width="80px" :model="rowObject">
					<el-form-item label="编号">
						<el-input v-model="rowObject.ID"></el-input>
					</el-form-item>
					<el-form-item label="插件名称">
						<el-input v-model="rowObject.BUNDLE_NAME"></el-input>
					</el-form-item>
					<el-form-item label="资源地址">
						<el-input v-model="rowObject.RESOURCE_URL"></el-input>
					</el-form-item>
					<el-form-item label="资源描叙">
						<el-input v-model="rowObject.RESOURCE_DESC"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="subDialogFormVisible">确 定</el-button>
				</div>
			</el-dialog>
		</el-col>
	</el-row>

</template>

<script>
	export default {
		name: 'httpurl',
		data() {
			return {
				total: 0,
				tableData: [],
				page: 1,
				rows: 10,
				rowObject: {},
				dialogFormVisible: false,
				loading: true,
				form: {}
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
			handleSizeChange(val) {
				this.rows = val;
				this.getBundle();
			},
			handleCurrentChange(val) {
				this.page = val;
				this.getBundle();
			},
			currentPage(val) {
				this.rowObject = val;
			},
			getBundle() {
				var formData = new FormData();
				formData.append('page', this.page);
				formData.append('rows', this.rows);
				var getHttpUrl = this.Consts.HOST + this.Consts.ADMIN.HTTP_URL;
				this.$http.post(getHttpUrl, formData).then(function(data) {
					this.tableData = data.data.rows;
					this.total = data.data.total;
				}, function(erro) {}).catch();
			},
			subDialogFormVisible() {
				var formData = new FormData();
				formData.append('id', this.rowObject.ID);
				formData.append('desc', this.rowObject.RESOURCE_DESC);
				var getHttpUrl = this.Consts.HOST + this.Consts.ADMIN.UPDATE_HTTPURL;
				this.$http.post(getHttpUrl, formData).then(function(data) {
					this.dialogFormVisible = false;
				}, function(erro) {}).catch();
			},
			del() {
				this.dialogFormVisible = true;
			}

		}
	}
</script>