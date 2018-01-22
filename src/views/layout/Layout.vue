<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="24">
          <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
            <el-menu-item index="1">AMC</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu default-active="/index" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/index" :class="{'isActive': active}">统计</el-menu-item>
          <el-menu-item index="/apiSerach" :class="{'isActive': !active}">API查询</el-menu-item>
          <el-menu-item index="/iMessage" :class="{'isActive': !active}">聊天室</el-menu-item>
        </el-menu>
      </el-aside>
    <el-container>
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view ref="main-control"></router-view>
        </transition>
      </el-main>
    </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data: function (){
      return {
        active:true
      }
    }
  }
</script>
<style>
  .el-header{
    background-color:rgba(56, 116, 214, 0.32)
  }
  .el-menu{
    border-top: 1px solid #e6e6e6;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
