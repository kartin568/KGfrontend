<template>
  <el-container>
    <!--内容块 模式定义-->
    <el-main>
      <div class="header">
        模式定义
      </div>
      <el-divider></el-divider>
      <div class="content">
        <div id="entitiDefinitions">
          <el-row type="flex" align="center">
            <el-col :span="3" class="title">实体定义</el-col>
            <el-col style="line-height:50px;">
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="newTag"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
              <el-tag
                v-for="(tag, index) in tags"
                :key="index"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
              </el-tag>
            </el-col>
          </el-row>
        </div>
        <el-divider></el-divider>
        <div id="relationDefinitions"></div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'DefineLabel',
    data () {
      return {
        tags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        newTag: ''
      }
    },
    methods: {
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.newTag;
        if (inputValue) {
          this.tags.push(inputValue);
        }
        this.inputVisible = false;
        this.newTag = '';
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
    padding:20px;
  }
  .title{
    font-weight: bold;
    padding-top:10px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .el-tag, .button-new-tag:hover{
    background-color: #F1F1FD;
    border:1px solid #E4E7ED;
    color: #5775FB;
  }

  .el-tag .el-tag__close{
    color: #5775FB !important;
  }

  .el-tag .el-tag__close:hover{
    background-color: #5775FB !important;
  }
  
</style>
