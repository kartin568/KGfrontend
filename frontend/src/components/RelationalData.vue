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
          <span slot="title">关系数据浏览</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!--内容块-->
    <el-main>
      <!--顶部-->
      <div class="header">
        关系数据浏览
      </div>
      <el-divider></el-divider>
      <!--中心-->
      <!--列表页-->
      <div class="main" >
        <!--标签选择-->
        <span style="color:#606266">请选择要筛选的条件及范围：</span>
        <el-select v-model="propertyIndex" placeholder="请选择属性" size="small" style="margin-left:20px;">
          <el-option
            v-for="(item, index) in properties"
            :key="index"
            :label="item"
            :value="index">
          </el-option>
        </el-select>
        <el-input-number style="margin-left:20px;" v-model="num" :min="minNumber" :max="maxNumber" size="small" label="描述文字"></el-input-number>
        <el-button style="margin-left:20px;" class="blueBtn" size="small" @click="onAddClick">添加条件</el-button>
        <el-button style="margin-left:20px;" class="darkBtn" size="small" @click="onSearchClick">筛选</el-button>
        <!--标签-->
        <div style="margin:20px 0;">
          <span style="color:#606266">筛选条件:</span>
          <MyPropertyTag
            v-for="(tag, index) in propertyTags"
            :key="index"
            :name="tag.name"
            :range="tag.range"
            v-on:closeRelationTag="tagClose(tag)">
          </MyPropertyTag>
        </div>
        <!--列表-->
        <el-table
          :data="tableData.slice((curPage - 1) * 10, curPage * 10)"
          :header-cell-style="{background:'#EBEEF7',color:'#606266'}"
          height="626"
          border>
          <el-table-column
            prop="title"
            label="名称"
            fixed>
          </el-table-column>
          <el-table-column
            prop="zdpfsd"
            label="最大平飞速度">
          </el-table-column>
          <el-table-column
            prop="zzbj"
            label="作战半径">
          </el-table-column>
          <el-table-column
            prop="xhsd"
            label="巡航速度">
          </el-table-column>
          <el-table-column
            prop="zdqfzl"
            label="最大起飞重量">
          </el-table-column>
          <el-table-column
            prop="zdsd"
            label="最大速度">
          </el-table-column>
          <el-table-column
            prop="xhgd"
            label="巡航高度">
          </el-table-column>
          <el-table-column
            prop="zdhc"
            label="最大航程">
          </el-table-column>
          <el-table-column
            prop="zlhpjl"
            label="着陆滑跑距离">
          </el-table-column>
          <el-table-column
            prop="qfhpjl"
            label="起飞滑跑距离">
          </el-table-column>
          <el-table-column
            prop="zdl"
            label="载弹量">
          </el-table-column>
          <el-table-column
            prop="xhsj"
            label="续航时间">
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
  </el-container>
</template>

<script>
import MyPropertyTag from './MyPropertyTag'
    export default {
      name: "RelationalData",
      components:{
        MyPropertyTag
      },
      data(){
          return{
            fileCount:0,
            curPage:1,
            //表格数据
            tableData: [],
            properties:[],
            propertyIndex:'',
            num:-1,
            maxNumber:10,
            minNumber:0,
            propertyTags:[],
            tagRecords:[]
          }
      },

      methods:{

        handleCurrentChange(cpage) {
          this.curPage = cpage;
        },
        tagClose(tag) {
          console.log(tag)
          this.tagRecords.splice(this.tagRecords.indexOf(this.properties.indexOf(tag.name)), 1);
          this.propertyTags.splice(this.propertyTags.indexOf(tag), 1);
        },
        onAddClick() {
          let tmp = this.tagRecords.indexOf(this.propertyIndex);
          console.log(tmp);
          if(tmp === -1){       //新的的筛选条件
            this.tagRecords.push(this.propertyIndex);
          } else {              //已有筛选条件
            this.tagRecords.splice(tmp, 1);
            this.propertyTags.splice(tmp, 1);
            this.tagRecords.push(this.propertyIndex);
          }
          console.log(this.tagRecords)
          this.propertyTags.push({
            name:this.properties[this.propertyIndex],
            range: this.minNumber + " ~ " + this.num
          })
        },
        onSearchClick(){
          console.log(1)
        }
      },
      
      mounted(){
        this.properties.push("最大平飞速度", "作战半径","巡航速度","最大起飞重量",
        "最大速度","巡航高度","最大航程","着陆滑跑距离","起飞滑跑距离","载弹量","续航时间");
      }
    }

</script>

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

  /***********按钮样式***********/
  .blueBtn{
    background-color: #EFF0FF;
    border: 1px solid #5775FB;
    color: #5775FB;
  }

  .blueBtn:hover,.blueBtn:active{
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
</style>
