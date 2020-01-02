<template>
  <el-container>
    <!--内容块 模式定义-->
    <el-main>
      <div class="header">
        模式定义
      </div>
      <el-divider></el-divider>
      <div class="content">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        
        
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'DefineLabel',
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

  .el-main {
    background-color: #F1F2F6;
    color: #333;
    text-align: center;
    line-height: 160px;
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
  }
</style>
