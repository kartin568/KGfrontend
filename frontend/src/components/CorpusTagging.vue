<template>
  <el-container>
    <!--内容块 语料标注-->
    <el-main>
      <div class="header">
          语料标注
          <el-divider></el-divider>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'CorpusTagging',
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
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 100%;
  }

  .header{
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: left;
  }
</style>
