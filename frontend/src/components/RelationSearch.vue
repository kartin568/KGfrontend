<template>
  <el-container>
    <!-- 左侧导航栏-->
    <el-aside width="200px">
      <el-menu
        default-active=""
        background-color="#343643"
        text-color="#fff"
        active-text-color="#fff"
        :router="true">
        <el-menu-item index="/entitysearch">
          <i class="el-icon-menu"></i>
          <span slot="title" >实体检索</span>
        </el-menu-item>
        <el-menu-item index="/relationsearch" class="is-active">
          <i class="el-icon-document"></i>
          <span slot="title">关系检索</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!--内容块-->
    <el-main>
      <!--顶部-->
      <div class="header">
        关系检索
      </div>
      <el-divider></el-divider>
      <!--中心-->
      <!--列表页-->
      <div class="main" >
        <!--搜索栏-->
        <el-input v-model="inputEntity" placeholder="请输入实体名称"></el-input>
        <el-button style="margin-left:20px;" class="darkBtn" size="small" @click="onSearchClick">搜索</el-button>

        <div class="result" v-if="searchDone">
          <!--关系图谱-->
          <div id="kgPic">
            <div class="title">关系图谱</div>
          </div>
          <!--三元组列表-->
          <el-table
            :data="tableData.slice((curPage - 1) * 10, curPage * 10)"
            :header-cell-style="{background:'#EBEEF7',color:'#606266'}"
            height="626"
            border>
            <el-table-column
              prop="entity1"
              label="实体1"
              fixed>
            </el-table-column>
            <el-table-column
              prop="relationship"
              label="关系">
            </el-table-column>
            <el-table-column
              prop="entity2"
              label="实体2">
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
      </div>
    </el-main>
  </el-container>

</template>

<script>
    export default {
        name: "RelationSearch",
      data(){
        return{
          fileCount:0,
          curPage:1,
          //表格数据
          tableData: [],
          searchDone:false,
          inputEntity:'',
        }
      },

      methods:{

        handleCurrentChange(cpage) {
          this.curPage = cpage;
        },
        onSearchClick(){
          this.searchDone=true;
        }
      },
    }
</script>

<style scoped>

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

  .el-menu-item{
    width: 200px;
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
  /*************内容中心*************/
  .main{
    line-height: 30px;
    height: 90%;
    width: 100%;
  }

  /*搜索栏*/
  .el-input{
    width: 400px;
    height: 32px;
  }

  /*关系图*/
  #kgPic{
    height: 200px;
    width: 100%;
    margin-top: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background-color: #fff;
  }
  .title{
    line-height: 55px;
    background-color: #E9EEF3;
    color: #606266;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    padding: 0 10px;
    font-weight: bold;
  }

  /*表格*/
  .el-table{
    height: 80%;
    width: 100%;
    margin-top: 20px;
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
