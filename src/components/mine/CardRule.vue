<template>
  <div class="cardRule">
    <ul class="cardRule-list">
      <li>
        <div class="card-list-cont">
          <div>
            <div class="title">{{data.title}}</div>
            <div class="threshold">{{data.threshold}}</div>
          </div>
          <img v-if="data.tabIndex == 1" src="@/assets/already-used.png"/>
          <img v-else-if="data.tabIndex == 2" src="@/assets/expired.png"/>
        </div>
        <div class="rule">
          <span>{{data.time}}</span>
        </div>
      </li>
    </ul>
    <div class="cardRule-details">
      <h4>使用规则</h4>
      <p>{{data.threshold}}</p>

      <h4>可用商品</h4>
      <p>特工系列/咖啡系列/</p>

      <h4>优惠规则</h4>
      <p>每个订单只能使用一张优惠券</p>
      <p>不与到店优惠共享折扣优惠</p>
      <p>订单完成后，选择退款，只能退回实际支付金额，不退优惠券</p>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return{
        data: this.$route.params,
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="less">
  .cardRule{
    background: #eee;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    .cardRule-list{
      color: #fff;
      padding: 20px 20px 0 20px;
      list-style: none;
      li{
        background: #ccc;
        margin-bottom: 20px;
        height: 90px;
        border-radius: 8px;
        position: relative;
        padding: 3% 5%;
        text-align: left;
        &:before,&:after{
          content: '';
          width: 16px;
          height: 16px;
          border-radius: 16px;
          background: #eee;
          position: absolute;
          top: 50%;
          margin-top: -8px;
          left: -8px;
        }
        &:after{
          left: initial;
          right: -8px;
        }
        .card-list-cont{
          display: flex;
          justify-content: space-between;
          .title{
            font-size: 18px;
            font-weight: bold;
          }
          .threshold{
            font-size: 14px;
            margin-top: 5px;
          }
          img{
            width: 60px;
            height: 60px;
            margin-right: 5px;
          }
        }
        .rule{
          font-size: 10px;
          position: absolute;
          bottom: 10px;
        }
      }
    }
    .cardRule-details{
      text-align: left;
      padding: 5px 30px;
      color: #000;
      h4{
        margin: 20px 0 5px;
      }
      p{
        font-size: 15px;
        color: #666;
      }
    }
  }
</style>


