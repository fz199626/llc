<template>
  <div class="remarks">
    <div class="remarks-cont">
      <textarea  maxlength="60" @input="remarkInput" v-model="remarks" placeholder="请填写备注信息"></textarea>
      <p class="remnant">{{remnant}}/60</p>
      <router-link to="/settlement" class="remarks-btn">确 定</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        remnant: 60,
        remarks: this.$store.state.remarks
      }
    },
    methods: {
      remarkInput(){
        var txtVal = this.remarks.length;
        this.remnant = 60 - txtVal;
        this.$store.commit('remark',this.remarks)
      }
    }
  }
</script>

<style scoped lang="less">
  .remarks{
    background: #eee;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: #999;
    .remarks-cont{
      background: #fff;
      padding: 30px;
      textarea{
        width: 94%;
        height: 160px;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 3%;
        outline: none;
        font-size: 14px;
        color: #666;
        line-height: 24px;
      }
      .remnant{
        text-align: right;
        padding-right: 10px;
        margin-top: -30px;
      }
      .remarks-btn{
        display: inline-block;
        width: 150px;
        height: 35px;
        line-height: 35px;
        border-radius: 20px;
        margin: 30px auto 0;
        background: green;
        color: #fff;
      }
    }
  }
</style>
