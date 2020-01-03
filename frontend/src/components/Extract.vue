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
          <span slot="title">知识抽取</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!--内容块-->
    <el-main>
      <div class="header">
        知识抽取
        <el-button type="primary" class="headbutton" size="small">上传</el-button>
        <el-divider></el-divider>
      </div>
      <div id="main">
        数据总量:{{fileCount}}

        <el-table
          :data="tableData"
          border>
          <el-table-column
            fixed
            prop="title"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="date"
            label="上传时间"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作"
            width="180"
            align="center">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="primary" plain size="small">分析</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          background
          layout="prev, pager, next"
          :total="fileCount">
        </el-pagination>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'Extract',
    data () {
      return {
        fileCount:100,
        tableData: [
          {
            date: '2016-05-03',
            title: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-03',
            title: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-03',
            title: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-03',
            title: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-03',
            title: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-03',
            title: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-03',
            title: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-03',
            title: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-03',
            title: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-03',
            title: '上海市普陀区金沙江路 1518 弄',
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .el-container{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
  }

  .el-aside {
    background-color: #343643;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    height: 100%;
    background-color: #F1F2F6;
  }

  .header{
    width: 100%;
    height: 10%;
    line-height: 20px;
    text-align: left;
  }
  .headbutton{
    float: right;;
    right: 60px;
    top: 75px;
  }

  #main{
    line-height: 30px;
    height: 90%;
    width: 100%;
  }

  .el-table{
    height: 80%;
    width: 100%;
  }

  .el-pagination{
    right: 60px;
    height: 10%;
    float: right;
  }
.is-active {
  background-color: rgba(255,255,255,0.2) !important;
  border-right: 4px solid #5775FB !important;
}
</style>
