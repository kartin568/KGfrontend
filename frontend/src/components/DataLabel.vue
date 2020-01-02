<template>
  <el-container>
    <!-- 左侧导航栏-->
    <el-aside width="200px">
      <el-menu
        default-active=""
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true">
        <el-menu-item index="/definelabel">
          <i class="el-icon-menu"></i>
          <span slot="title" >模式定义</span>
        </el-menu-item>
        <el-menu-item index="/corpustagging">
          <i class="el-icon-document"></i>
          <span slot="title">语料标注</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!--内容块-->
    <router-view/>
  </el-container>
</template>

<script>
  export default {
    name: 'DataLabel',
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
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 100%;
  }
</style>
