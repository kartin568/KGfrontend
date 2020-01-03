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
    <el-main v-if="isList">
      <!--顶部-->
      <div class="header">
        知识抽取
        <el-button type="primary" class="headbutton" size="small" @click="isUpload=true">上传</el-button>
      </div>
      <el-divider></el-divider>
      <!--中心-->
      <!--      列表页-->
      <div class="main" >
        <div class="top-tip">
          数据总量:{{fileCount}}
        </div>
        <!-- 上传窗口-->
        <div id="upload" v-if="isUpload">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>语料上传</span>
              <i class="el-icon-close" style="float: right; padding: 3px 0" @click="isUpload=false"></i>
            </div>
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-change="handleAddFile"
              :file-list="fileList"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">
                支持上传Excel文件、Json文件以及txt文件<br>
                Excel文件第一行为title，第二行为text<br>
                Json数据结构为对象数组，对象属性值含有title和text<br>
              </div>
            </el-upload>
            <el-button size="small"@click="isUpload=false">取消</el-button>
            <el-button style="margin-left: 10px;" size="small" type="primary" @click="submitUpload">上传</el-button>
          </el-card>
        </div>
        <!--文书列表-->
        <el-table
          :data="tableData.slice((curPage - 1) * 10, curPage * 10)"
          :header-cell-style="{background:'#EBEEF7',color:'#606266'}"
          height="626"
          border>
          <el-table-column
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
            width="100"
            align="center">
            <template slot-scope="scope">
              <el-button @click="handleAnalysis(scope.row)" type="primary" plain size="small">分析</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页符-->
        <el-pagination
          background
          layout="prev, pager, next"
          :total="fileCount"
          @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </el-main>
    <!--分析页-->
    <el-main v-else>
      <!--顶部-->
      <div class="header">
        <i class="el-icon-back" @click="isList=true"></i>
        <el-button type="primary" class="headbutton" size="small" @click="handleExport">导出</el-button>
      </div>
      <el-divider></el-divider>
      <!--中心-->
      <div class="main" >
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'Extract',
    data () {
      return {
        isList:true,
        fileCount:100,
        isUpload:false,
        curPage:1,
        //上传的文件列表
        fileList: [
          {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        ],
        //表格数据，文书列表
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
    },


    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        this.fileList = fileList;
      },
      handlePreview(file) {
        console.log(file);
      },
      handleAddFile(file,fileList){
        this.fileList = fileList;
      },
      handleCurrentChange(cpage) {
        this.curPage = cpage;
      },
      handleAnalysis(row){
        console.log(row);
        this.isList = false;
      },
      handleExport(){

      },
    },

    mounted() {
      this.fileCount = this.tableData.length;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /****************整体布局*******************/
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

  /**************左侧导航栏***************/
  .is-active {
    background-color: rgba(255,255,255,0.2) !important;
    border-right: 4px solid #5775FB !important;
  }

  /**************内容顶部***************/
  .header{
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: left;
    margin-left: 20px;
    font-weight: bold;
    font-size: large;
  }
  .headbutton{
    float: right;
    margin-right: 60px;
  }
  .top-tip{
    margin-top: -10px;
    margin-bottom: 10px;
    padding-left: 20px;
  }
  /*************内容中心*************/
  .main{
    line-height: 30px;
    height: 90%;
    width: 100%;
  }
  /*表格*/
  .el-table{
    height: 80%;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  /*分页符*/
  .el-pagination{
    right: 60px;
    height: 10%;
    text-align: right;
    margin-top: 40px;
  }

  /***************上传弹窗***********/
  #upload{
    text-align: center;
    z-index: 99;
    position: fixed;
    top: 20%;
    left: 30%;
    right: 30%;
  }
  .upload-demo{
    margin-bottom: 20px;
  }
  .el-upload__tip{
    padding-left: 30%;
    text-align: left;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>
