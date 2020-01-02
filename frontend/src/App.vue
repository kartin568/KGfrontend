<template>
  <div id="app">
    <el-container>
      <!-- 顶部导航栏-->
      <el-header>
        <el-col id="logo" :offset="0" :span="2.2">
          <img src="./assets/KGLogo.png" />
          作战文书管理系统
        </el-col>
        <el-col :offset="14" :span="4">
          <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            @select=""
            background-color="#2C2B31"
            text-color="#fff"
            active-text-color="#409EFF"
            :router="true">
            <el-menu-item index="/datalabel">数据标注</el-menu-item>
            <el-menu-item index="/extract">知识抽取</el-menu-item>
            <el-menu-item index="/correct">知识校正</el-menu-item>
          </el-menu>
        </el-col>
        <el-col id="user" :offset="1" :span="2">
          {{usrName}}<i class="el-icon-arrow-down el-icon--right"></i>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-col>
      </el-header>
      <router-view/>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      usrName:"Admin",
    }
  }
}
</script>

<style>
  html,body,#app,.el-container{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
  }


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

 body > .el-container {
   width: 100%;
   height: 100%;
 }

.el-header{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

#logo >img{
  width: 40px;
  vertical-align:middle;
}

  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
