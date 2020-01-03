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
      <el-row type="flex" align="middle">
      <el-col class="header" :span="22">
        文本加工任务
      </el-col>
      <el-col :span="2">
        <el-button id="save">保存</el-button>
      </el-col>
      </el-row>
      <el-divider></el-divider>
      <div class="content">
        <el-table
          :data="tableData.slice((curPage - 1) * 10, curPage * 10)"
          height="626"
          border>
          <el-table-column
            prop="title"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="date"
            label="尾实体"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作"
            width="170">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" class="blueBtn" size="small">修改</el-button>
              <el-button type="danger" plain size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination
        background
        layout="total, jumper"
        :total="fileCount"
        @current-change="handleCurrentChange"
        style="margin-top:20px;">
      </el-pagination>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'Correct',
    data () {
      return {
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
            date: '2016-05-04',
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
            date: '2016-05-04',
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
        ],
        curPage:1,
        fileCount:1000
      }
    },
    methods: {
      handlePreview(file) {
        console.log(file);
      },
      handleCurrentChange(cpage) {
        this.curPage = cpage;
      },
    },
    mounted() {
      this.fileCount = this.tableData.length;
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
    height: 20px;
    line-height: 20px;
    text-align: left;
    margin-left: 20px;
    font-weight: bold;
    font-size: large;
  }

  .content{
    /* min-height: calc(100% - 88px); */
    background-color: #FFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 4px;
    padding:0 0 20px 0;
  }
  
  .is-active {
    background-color: rgba(255,255,255,0.2) !important;
    border-right: 4px solid #5775FB !important;
  }

  .blueBtn{
    background-color: #EFF0FF;
    border: 1px solid #5775FB;
    color: #5775FB;
  }

  .blueBtn:hover{
    background-color: #5775FB;
    color: #FFFFFF;
  }

  #save{
    background-color: #5775FB;
    border: 1px solid #5775FB;
    color: #FFFFFF;
  }
  #save:hover{
    background-color: #708BF7;
  }
</style>
