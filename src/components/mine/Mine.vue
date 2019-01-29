<template>
  <div class="mine">
    <div class="mine-head">
      <div class="mine-head-icon">
        <img :src="personal.head"/>
      </div>
      <div class="mine-head-info">
        <h2>{{personal.name}}</h2>
        <span>普通会员</span>
      </div>
    </div>
    <!--<div class="mine-banner">-->
      <!--<img src="@/assets/m-banner.png"/>-->
    <!--</div>-->
    <div class="mine-property">
      <div class="integral">
        <h1>0</h1>
        <h4>积分</h4>
      </div>
      <div class="card">
        <h1>0</h1>
        <h4>优惠券</h4>
      </div>
    </div>
    <div class="mine-list">
      <router-link to="/address"><img src="@/assets/m-addres.png"/>地址管理</router-link>
      <router-link to="/"><img src="@/assets/m-personal.png"/>个人资料</router-link>
      <a href="tel:18917293695"><img src="@/assets/call.png"/>联系商家</a>
      <router-link to="/feedback"><img src="@/assets/m-feedback.png"/>意见反馈</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        personal: []
      }
    },
    mounted() {
      this.mine()
    },
    methods: {
      mine() {
        let mineUrl = "http://linlinchi.auteng.cn/address/user-info"
        this.axios.get(mineUrl).then( res => {
          this.personal = res.data.data
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .mine{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 51px;
    left: 0;
    overflow: auto;
    .mine-head{
      height: 120px;
      background: url("./../../assets/m-bj.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      padding: 20px;
      .mine-head-icon{
        width: 70px;
        height: 70px;
        border-radius: 60px;
        overflow: hidden;
        background: #fff;
        margin-right: 10px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .mine-head-info{
        height: 70px;
        text-align: left;
        h2{
          margin: 5px 0;
        }
        span{
          padding: 3px 10px;
          border-radius: 10px;
          background: #000;
          color: #fff;
          font-size: 10px;
        }
      }
    }
    .mine-banner{
        display: inline-block;
      margin: 20px 20px 0;
      img{
        width: 100%;
        border-radius: 10px;
      }
    }
    .mine-property{
      height: 100px;
      display: flex;
      align-items: center;
      .integral,.card{
        flex: 1;
      }
    }
    .mine-list{
      text-align: left;
      padding: 0 30px;
      list-style: none;
      font-size: 14px;
      display: flex;
      flex-wrap: wrap;
      a{
        padding: 15px 0;
        color: #333;
        width: 100%;
        img{
          width: 15px;
          height: 15px;
          margin-right: 10px;
          position: relative;
          top: 1px;
        }
      }
    }
  }
</style>
