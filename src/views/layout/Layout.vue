<template>
  <el-container>
    <el-header>
      <el-col :span="4"><div class="grid-content bg-purple-light">LOGO</div></el-col>
      <el-col :span="4" :offset="16"><div class="grid-content bg-purple-light">USER</div></el-col>
    </el-header>
    <el-aside>
      ASIDE
    </el-aside>
    <el-main>
      <el-col :span="24" class="content-wrapper">
        <transition name="fade" mode="out-in">
          <router-view ref="main-control"></router-view>
        </transition>
      </el-col>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
}
</script>
<style>
  .el-header{
    background-color:rgba(56, 116, 214, 0.32)
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
