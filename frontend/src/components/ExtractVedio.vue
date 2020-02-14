<template>
  <el-container>
    <!-- 左侧导航栏-->
    <el-aside width="200px">
      <el-menu
        default-active=""
        class="el-menu-vertical-demo"
        background-color="#343643"
        text-color="#fff"
        active-text-color="#fff"
        :router="true">
        <el-menu-item index="/extract">
          <i class="el-icon-menu"></i>
          <span slot="title">文本抽取</span>
        </el-menu-item>
        <el-menu-item index="/extractPic">
          <i class="el-icon-menu"></i>
          <span slot="title" >图片抽取</span>
        </el-menu-item>
        <el-menu-item index="/extractVedio" class="is-active">
          <i class="el-icon-document"></i>
          <span slot="title">视频抽取</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!--内容块-->
    <el-main>
      <!--顶部-->
      <div class="header">
        视频抽取
        <el-button type="primary" class="darkBtn headbutton" size="small" @click="onUpload">上传与分析</el-button>
      </div>
      <!-- 上传窗口-->
      <div id="upload" v-if="isUpload">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>语料上传</span>
            <i class="el-icon-close" style="float: right; padding: 3px 0" @click="cancelUpload"></i>
        </div>
        <el-upload
            class="upload-demo"
            drag
            ref="upload"
            :auto-upload="false"
            accept=".mp4"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-remove="handleRemove"
            :on-change="handleAddFile"
            :file-list="uploadList"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">
            仅支持上传mp4文件<br>
            </div>
        </el-upload>
        <el-button size="small" @click="cancelUpload">取消</el-button>
        <el-button style="margin-left: 10px;" class="darkBtn" size="small" type="primary" @click="submitUpload">上传并分析</el-button>
        </el-card>
      </div>
      <el-divider></el-divider>
      <!--中心-->
      <div class="main" >
        <div class="header">
          抽取结果-----.swf文件？？
        </div>
        <!--图片展示-->
        <div class="picContainer">
            <el-carousel trigger="click" style="height:100%;" :autoplay="false">
                <el-carousel-item v-for="item in vedioList" :key="item" style="height:100%;">
                    <embed :src="item" 
                      class="vedioStyle" 
                      type="application/x-shockwave-flash" />
                </el-carousel-item>
            </el-carousel>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>

  export default {
    name: 'ExtractPic',
    data () {
      return {
        vedioList: [
          'http://player.youku.com/player.php/sid/XMzI2NTc4NTMy/v.swf'
        ],
        isUpload:false,
        uploadList:[]
      }
    },

    methods: {
      onUpload(){
        this.isUpload = true;
      },
      cancelUpload(){
        this.isUpload=false;
        this.uploadList=[];
      },
      submitUpload() {
        //上传
        this.$refs.upload.submit();
        //分析
      },
      handleRemove(file, fileList) {
        this.uploadList = fileList;
      },
      handleAddFile(file,fileList){
        console.log(file);
        console.log(fileList);
        this.uploadList = fileList;
      }
    },


    mounted() {
      
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
    overflow: hidden;
  }
  /****************整体布局*******************/

  body > .el-container {
    width: 100%;
    height: 100%;
  }
  .el-aside {
    background-color: #343643;
    min-height: calc(100% - 60px);
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
    margin-right: 40px;
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

  .el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: #5775FB !important;
  }
  .el-pagination.is-background .el-pager li:hover{
    color: #5775FB !important;
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

  /***********按钮样式***********/
  .blueBtn{
    background-color: #EFF0FF;
    border: 1px solid #5775FB;
    color: #5775FB;
  }

  .blueBtn:hover,.blueBtn:active, .blueBtn:focus{
    background-color: #5775FB;
    color: #FFFFFF;
  }

  .darkBtn{
    background-color: #5775FB;
    border: 1px solid #5775FB;
    color: #FFFFFF;
  }
  .darkBtn:hover{
    background-color: #708BF7;
  }
  /*视频及走马灯样式*/
  .picContainer{
      height: calc(100% - 45px);
      width: 100%;
      padding: 20px 10px;
  }

  .el-carousel__container, .el-image, .el-carousel, .vedioStyle{
      height:100% !important;
  }

  .el-carousel__item{
      text-align: center;
  }
</style>
