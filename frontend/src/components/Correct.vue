<template>
  <el-container>
    <!-- 左侧导航栏-->
    <el-aside width="200px">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#343643"
        text-color="#fff"
        active-text-color="#fff">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">知识校正</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!--内容块-->
    <el-main>
      <div class="header">
        模式定义
      </div>
      <el-divider></el-divider>
      <div class="content">
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'Correct',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  html,body,.el-container{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
  }


  body > .el-container {
    width: 100%;
    height: 100%;
  }

  .el-aside {
    background-color: #343643;
  }

  .el-main {
    background-color: #F1F2F6;
    color: #333;
    text-align: center;
    min-height: calc(100% - 60px);
  }

  .header{
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: left;
    margin-left: 20px;
    font-weight: bold;
    font-size: large;
  }

  .content{
    min-height: calc(100% - 88px);
    background-color: #FFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 4px;
    padding:15px 20px 0 20px;
  }
  
.is-active {
  background-color: rgba(255,255,255,0.2) !important;
  border-right: 4px solid #5775FB !important;
}
</style>
