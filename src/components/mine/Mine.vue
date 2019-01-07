<template>
  <div class="mine">
    <div class="mine-head">
      <div class="mine-head-icon">
        <img src="@/assets/logo.png"/>
      </div>
      <div class="mine-head-info">
        <h2>Darion.</h2>
        <span>普通会员</span>
      </div>
    </div>
    <router-link to="/gift" class="mine-banner">
      <img src="@/assets/m-banner.png"/>
    </router-link>
    <div class="mine-property">
      <div class="integral">
        <h1>120</h1>
        <h4>积分</h4>
      </div>
      <router-link to="/card" class="card">
        <h1>4</h1>
        <h4>优惠券</h4>
      </router-link>
    </div>
    <div class="mine-list">
      <router-link to="/address"><img src="@/assets/m-addres.png"/>地址管理</router-link>
      <router-link to="/"><img src="@/assets/m-personal.png"/>个人资料</router-link>
      <router-link to="/feedback"><img src="@/assets/m-feedback.png"/>意见反馈</router-link>
    </div>
  </div>
</template>

<style scoped lang="less">
  .mine{
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
