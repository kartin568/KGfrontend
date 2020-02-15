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
      <div class="main">
         <el-tabs style="margin:0 15px;">
          <el-tab-pane label="抽取结果" name="first">
            <!--视频展示-->
            <div v-if="!flag">请先上传文件分析</div>
            <div class="picContainer" v-else>
                <el-carousel trigger="click" style="height:100%;" :autoplay="false">
                    <el-carousel-item v-for="item in vedioList" :key="item" style="height:100%;">
                        <!--<embed :src="item"-->
                          <!--class="vedioStyle"-->
                          <!--type="application/x-shockwave-flash" />-->
                      <video :src="item" controls="controls" style="width:100%;">
                      </video>
                    </el-carousel-item>
                </el-carousel>
            </div>
          </el-tab-pane>
          <el-tab-pane label="图谱展示" name="second">
            <div v-if="!flag">请先上传文件分析</div>
            <div v-else>
              <div>
                请选择要查看的图片：
                <el-select v-model="optIndex" size="small">
                  <el-option
                    v-for="(item, index) in optList"
                    :key="index"
                    :label="item"
                    :value="index">
                  </el-option>
                </el-select>
                <el-button @click="onSelect" class="blueBtn" size="small">确定</el-button>
              </div>
              <div id="graph" style="width:1000px; height:750px;"></div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  let echarts = require('echarts');
  let myChart;

  export default {
    name: 'ExtractPic',
    data () {
      return {
        vedioList: [],
        isUpload:false,
        uploadList:[],
        optList:[],
        flag:false,
        optIndex:''
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
        // this.$refs.upload.submit();
        this.optList = [];
        for(let i = 0; i < this.uploadList.length; i ++){
          this.optList.push(this.uploadList[i].name)
        }
        //分析
        this.vedioList=[];
        this.vedioList.push("https://vdept.bdstatic.com/766c61556a637862494d525073497967/7168786b72575243/2fdfac5ac676dae096ae25bc9c5174f9e3e80c313b38d89c35da8272a09144ca64f32cf743c8a7c74223a4e449954793.mp4?auth_key=1581744001-0-0-72974359bb3fe4e6c0416d25ee7e6b0a");
        this.flag = true;
        this.isUpload = false;
      },
      handleRemove(file, fileList) {
        this.uploadList = fileList;
      },
      handleAddFile(file,fileList){
        console.log(file);
        console.log(fileList);
        this.uploadList = fileList;
      },
      onSelect() {
        //加载echarts
        console.log(this.optIndex);
        let categories=[
          {name:'属性A'},
          {name:'属性B'},
        ];
        let option ={
          // 图的标题
          title: {
            text: 'test'
          },
          // 提示框的配置
          tooltip: {
            formatter: function (x) {
              return x.data.des;
            }
          },
          // 工具箱
          toolbox: {
            // 显示工具箱
            show: true,
            feature: {
              mark: {
                show: true
              },
              // 还原
              restore: {
                show: true
              },
              // 保存为图片
              saveAsImage: {
                show: true
              }
            }
          },
          legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
              return a.name;
            })
          }],
          series: [{
            type: 'graph', // 类型:关系图
            layout: 'force', //图的布局，类型为力导图
            symbolSize: 40, // 调整节点的大小
            roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            force: {
              repulsion: 2500,
              edgeLength: [10, 50]
            },
            draggable: true,
            lineStyle: {
              normal: {
                width: 2,
                color: '#4b565b',
              }
            },
            edgeLabel: {
              normal: {
                show: true,
                formatter: function (x) {
                  return x.data.name;
                }
              }
            },
            label: {
              normal: {
                show: true,
                textStyle: {}
              }
            },
            // 数据
            data: [{
              name: 'node01',
              des: 'nodedes01',
              symbolSize: 70,
              category: 0,
            }, {
              name: 'node02',
              des: 'nodedes02',
              symbolSize: 50,
              category: 1,
            }, {
              name: 'node03',
              des: 'nodedes3',
              symbolSize: 50,
              category: 1,
            }, {
              name: 'node04',
              des: 'nodedes04',
              symbolSize: 50,
              category: 1,
            }, {
              name: 'node05',
              des: 'nodedes05',
              symbolSize: 50,
              category: 1,
            }],
            links: [{
              source: 'node01',
              target: 'node02',
              name: 'link01',
              des: 'link01des'
            }, {
              source: 'node01',
              target: 'node03',
              name: 'link02',
              des: 'link02des'
            }, {
              source: 'node01',
              target: 'node04',
              name: 'link03',
              des: 'link03des'
            }, {
              source: 'node01',
              target: 'node05',
              name: 'link04',
              des: 'link05des'
            }],
            categories: categories,
          }],
          grid:{
            top:"10px",
            bottom:"10px",
            height:"10px",
            width:"10px"
          }
        }

        myChart= echarts.init(document.getElementById('graph'));
        // 绘制图表
        myChart.setOption(option);
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

<style>
  .el-carousel__container, .el-tabs__content, .el-tabs, .el-tab-pane{
    height: 100% !important;
  }
  
  /*tab样式*/
  .el-tabs__active-bar{
    background-color:#708BF7 !important;
  }
  .el-tabs__item.is-active, .el-tabs__item:hover{
    color: #708BF7;
  }
</style>