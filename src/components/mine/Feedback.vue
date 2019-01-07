<template>
  <div class="feedback">
    <div class="feedback-cont">
      <textarea  maxlength="60" @input="descInput" v-model="desc" placeholder="请填写反馈信息"></textarea>
      <p class="remnant">{{remnant}}/60</p>
      <p class="feedback-tel"><label>手机号</label><input type="text" v-model="tel" placeholder="请填写您的手机号码"/></p>
      <div class="feedback-btn" @click="feedbackBtn">提 交</div>
    </div>
    <div class="tips">
      <p>感谢您的建议和反馈，我们将认真阅读您的每一条信息</p>
      <p>如果我们采纳您的意见，您将获得买一送一优惠券一张</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        remnant: 60,
        desc: "",
        tel: ""
      }
    },
    methods: {
      descInput(){
        var txtVal = this.desc.length;
        this.remnant = 60 - txtVal;
      },
      feedbackBtn() {
        console.log(this.desc)
        console.log(this.tel)
      }
    }
  }
</script>

<style scoped lang="less">
  .feedback{
    background: #eee;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: #999;
    .feedback-cont{
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
      .feedback-tel{
        margin-top: 30px;
        display: flex;
        color: #666;
        align-items: center;
        input{
          flex: 1;
          margin-left: 10px;
          font-size: 14px;
          color: #666;
          outline: none;
          border: 1px solid #ddd;
          border-radius: 8px;
          height: 24px;
          padding-left: 5px
        }
      }
      .feedback-btn{
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
  .tips{
    font-size: 12px;
    margin-top: 20px;
    p{
      margin-top: 5px;
    }
  }
</style>
