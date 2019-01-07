<template>
  <div class="cart">
    <div class="cart-mask" v-show="show" @click="selectedBtn"></div>
    <div class="selected" v-show="show">
      <ul v-if="cardList.length > 0">
        <li v-for="(item,index) in cardList" :key="index">
          <div class="selected-left">
            <h5>{{item.id}}{{item.name}}</h5>
            <!--<div class="standard">热/大</div>-->
          </div>
          <div class="selected-right">
            <div class="unit-price">￥19</div>
            <div class="count-num">
              <span class="reduce-num" @click="reduceNum(index)">-</span>
              <span class="good-num">{{item.num}}</span>
              <span class="add-num" @click="addNum(index)">+</span>
          </div>
          </div>
        </li>
      </ul>
      <ul v-else>
        <li class="selected-none">购物车内暂无商品</li>
      </ul>
    </div>
    <div class="cart-show">
      <div class="selected-btn" @click="selectedBtn">
        <span><img src="@/assets/cart-icon.png"/></span>
        <span class="cart-cont">购物车</span>
        <span class="selected-num">{{this.$store.state.cardNum}}</span>
      </div>
      <div class="settlement">
        <div class="settlement-price">￥29</div>
        <router-link v-if="cardList.length > 0" to="/settlement" class="settlement-btn">结算</router-link>
        <div v-else class="settlement-btn">结算</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        show: false,
        cardList: this.$store.state.cardList,
      }
    },
    methods: {
      selectedBtn(){
        this.show = !this.show
      },
      reduceNum(index){
        this.$store.commit('jian',index)
      },
      addNum(index){
        this.$store.commit('jia',index)
      }
    }
  }
</script>

<style scoped lang="less">
@cartBottom: 51px;
.cart{
  .cart-mask{
    background: rgba(0,0,0,.2);
    position: absolute;
    top: 0;
    right: 0;
    bottom: @cartBottom;
    left: 0;
  }
  .selected{
    position: absolute;
    right: 0;
    bottom: @cartBottom + 40;
    left: 0;
    ul{
      list-style: none;
      width: 70%;
      padding: 20px 5% 30px;
      background: #fff;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      margin-left: 10%;
      position: absolute;
      bottom: 0;
      li{
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .selected-left{
          .standard{
            font-size: 10px;
          }
        }
        .selected-right{
          display: flex;
          align-items: center;
          .unit-price{
            font-size: 14px;
          }
          .count-num{
            margin-left: 10px;
            .reduce-num,.add-num{
              display: inline-block;
              width: 14px;
              height: 14px;
              border-radius: 14px;
              background: #ccc;
              color: #ffff;
              line-height: 14px;
              position: relative;
              top: 2px;
            }
            .good-num{
              margin: 0 10px;
              font-size: 14px;
            }
            .add-num{
              background: red;
            }
          }
        }
      }
    }
    .selected-none{
      ext-align: center;
      font-size: 14px;
      color: #999;
      width: 100%;
    }
  }
  .cart-show{
    background: #fff;
    height: 40px;
    position: absolute;
    right: 0;
    bottom: @cartBottom;
    left: 0;
    display: flex;
    .selected-btn{
      line-height: 40px;
      font-size: 0;
      img{
        width: 30px;
        position: absolute;
        top: -12px;
        left: 15px;
      }
      .cart-cont{
        font-weight: bold;
        font-size: 15px;
        margin-left: 50px;
      }
      .selected-num{
        font-size: 12px;width: 15px;
        height: 15px;
        border-radius: 15px;
        background: red;
        display: inline-block;
        color: #fff;
        line-height: 16px;
        position: absolute;
        top: -3px;
        text-align: center;
      }
    }
    .settlement{
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
      height: 40px;
      line-height: 40px;
      .settlement-price{
        padding: 0 10px;
        font-weight: bold;
      }
      .settlement-btn{
        background: red;
        padding: 0 20px;
        color: #fff;
        font-size: 15px;
      }
    }
  }
}
</style>
