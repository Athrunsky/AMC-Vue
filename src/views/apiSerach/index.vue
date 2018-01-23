<template>
  <el-container>
    <el-header style=" font-size: 12px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-select v-model="value8" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
          <el-button @click="dialogVisible = true">新项目 </el-button>

          <el-dialog
            title="录入新项目"
            :visible.sync="dialogVisible"
            width="30%">
              <el-input :span="6" v-model="input" placeholder="新项目名称"></el-input>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitNewProject">确 定</el-button>
               </span>
          </el-dialog>


        </el-col>
        <el-col :span="6">
          <el-input :span="6" v-model="input" placeholder="请输入接口关键字"></el-input>
        </el-col>
        <el-button>查询</el-button>
        <el-button type="warning">删除接口</el-button>
        <el-button type="success">提交新接口</el-button>
      </el-row>
    </el-header>

    <el-main>
      <el-table
        :data="tableData"
        style="width: 100%;"
        border
      >
        <el-table-column
          width="160"
          label="日期"
          >
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          >
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
        label="API"
        width="500"
        >
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  import { getProjectMenu } from '../../config/api'
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        dialogVisible: false,
        options:[],
        value8: '',
        input:'',
        visible2: false,
        tableData: Array(5).fill(item)
      }
    },
    created () {
      this.getProjectMenu();
    },
    methods: {
      getProjectMenu(){
        getProjectMenu.get()
          .then(response => {
            this.options = response.data.array;
            console.info(response.data.array);
          }, response => {
            console.info('fail')
          })
      },
      submitNewProject(){
        console.info('123');
        this.dialogVisible = false;

      },
      handleEdit(index, row) {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      handleDelete(index, row) {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  };
</script>
