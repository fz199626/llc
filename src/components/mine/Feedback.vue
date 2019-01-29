<template>
  <div class="feedback">
    <div class="msg" v-show="showMsg">{{msg}}</div>
    <div class="feedback-cont">
      <textarea  maxlength="60" @input="descInput" v-model="content" placeholder="请填写反馈信息"></textarea>
      <p class="remnant">{{remnant}}/60</p>
      <p class="feedback-tel"><label>手机号</label><input type="tel" v-model="tel" placeholder="请填写您的手机号码"/></p>
      <div class="feedback-btn" @click="feedbackBtn(showMsg)">提 交</div>
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
        content: "",
        tel: "",
        msg : '',
        showMsg : false
      }
    },
    methods: {
      descInput(){
        var txtVal = this.content.length;
        this.remnant = 60 - txtVal;
      },
      feedbackBtn(showMsg) {
        if(showMsg == false){
          let feedbackUrl = "http://linlinchi.auteng.cn/feedback/submit"
          let data = {
            content: this.content,
            tel: this.tel
          }
          this.axios.post(feedbackUrl,data).then( res => {
            if(res.data.code == 10000){
              this.msg = res.data.msg
              this.showMsg = !this.showMsg
              setTimeout(() => {
                this.showMsg = !this.showMsg
                this.$router.push('/mine')
              },2000);
            }
          })
        }
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
    .msg{
      color: green;
      width: 40%;
      text-align: center;
      background: #fff;
      padding: 15px 0;
      margin-left: 30%;
      border: 1px solid #999;
      border-radius: 10px;
      position: absolute;
      top: 100px;
    }
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
        background: #0ebf38;
        color: #fff;
      }
    }
    .tips{
      font-size: 12px;
      margin-top: 20px;
      p{
        margin-top: 5px;
      }
    }
  }
</style>
