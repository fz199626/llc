<template>
  <keep-alive>
    <div class="settlement">
      <div class="settlement-content">
        <div class="way">
          <div><h2>国顺东路店</h2><p>9999号2楼灵灵柒</p></div>
          <div>
            <span @click="selectWay(1)" :class="{nowWay:this.$store.state.nowWay == 1}">到店<br/>自取</span>
            <span @click="selectWay(2)" :class="{nowWay:this.$store.state.nowWay == 2}">外卖<br/>配送</span>
          </div>
        </div>
        <div class="address">
          <div v-if="orderAddress != ''">
            <h4>{{orderAddress.address}}{{orderAddress.specific}}</h4>
            <div>
              <p><span>收货人：{{orderAddress.name}}</span> <span>{{orderAddress.tel}}</span></p>
              <div @click="selectAddress"><img src="@/assets/logo.png"/></div>
            </div>
          </div>
          <div class="selectAddress" v-else @click="selectAddress">添加地址</div>
        </div>
        <div class="bill">
          <ul>
            <li v-for="item in cardList" :key="item.id">
              <div class="li-left">
                <img src="@/assets/n-mine.png"/>
                <div>
                  <span class="title">{{item.name}}</span><br />
                  <!--<span>大/热/无糖</span>-->
                </div>
              </div>
              <div class="num-price">
                <span>x{{item.num}}</span>
                <span class="unit-price">￥19</span>
              </div>
            </li>
          </ul>
          <div class="dispatching"><span>配送费</span><span>￥5</span></div>
          <div class="balance">
            <span>联系商家</span>
            <div class="num-price"><span>x{{this.$store.state.cardNum}}</span><span class="price">￥150</span></div>
          </div>
        </div>
        <div class="info"><span>优惠券</span><span class="info-right">暂未开放</span></div>
        <router-link to="/remarks" class="info">
          <span>备注信息</span>
          <span class="info-right" v-if="this.$store.state.remarks == ''">需要打包/加料等</span>
          <span class="info-right" v-else>{{this.$store.state.remarks}}</span>
        </router-link>
      </div>
      <div class="settlement-bottom">
        <div>￥120</div>
        <div class="settlement-btn" @click="pay">支付</div>
      </div>
    </div>
  </keep-alive>
</template>

<script>
  export default {
    data() {
      return{
        cardList: this.$store.state.cardList,
        orderAddress: this.$store.state.orderAddress
      }
    },
    methods: {
      selectWay(nowWay){
        this.$store.commit('selectWay',nowWay)
      },
      selectAddress(){
        this.$router.push({
          name:'address',
          params:{
            data: true
          }
        })
      },
      // weixinPay(data){
      //   var vm= this;
      //   if (typeof WeixinJSBridge == "undefined"){//微信浏览器内置对象。参考微信官方文档
      //     if( document.addEventListener ){
      //       document.addEventListener('WeixinJSBridgeReady', vm.onBridgeReady(data), false);
      //     }else if (document.attachEvent){
      //       document.attachEvent('WeixinJSBridgeReady', vm.onBridgeReady(data));
      //       document.attachEvent('onWeixinJSBridgeReady',vm.onBridgeReady(data));
      //     }
      //   }else{
      //     vm.onBridgeReady(data);
      //   }
      // },
      pay(data){
      //   var timestamp =Date.parse(new Date());
      //   var  vm = this;
      //   WeixinJSBridge.invoke(
      //     'getBrandWCPayRequest',{
      //       debug: true,
      //       "appId": 'wx8546e89310ae4f33', //公众号名称，由商户传入
      //       "timeStamp": timestamp, //时间戳，自1970年以来的秒数
      //       "nonceStr": "57e65ce69d05965ef9fb3c334659e3df",  //随机串
      //       "package": "prepay_id=1499702672",
      //       "signType": "MD5",   //微信签名方式
      //       "paySign": "fCidgPVjtBglpzqAAmF4ETsKflwXpO2rvKttbFKyx2O",     //微信签名
      //     },
      //     function(res){
      //      alert(JSON.stringify(res))
      //       if(res.err_msg == "get_brand_wcpay_request:ok" ){
      //         alert("支付成功！");
      //       }else if(res.err_msg == "get_brand_wcpay_request:cancel"){
      //         alert('支付取消');
      //       }else if(res.err_msg == "get_brand_wcpay_request:fail"){
      //         alert('支付失败');
      //       }
      //     }
      //   );
      }
    }
  }
</script>

<style scoped lang="less">
  .settlement{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .settlement-content{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 50px;
      left: 0;
      overflow: auto;
      padding: 20px;
      background: #eee;
      text-align: left;
      &::-webkit-scrollbar{
        display:none;
      }
      .way{
        display: flex;
        justify-content: space-between;
        p{
          font-size: 15px;
        }
        span{
          width: 50px;
          height: 45px;
          display: inline-block;
          background: #fff;
          border-radius: 5px;
          text-align: center;
          font-size: 14px;
          margin-left: 10px;
          padding-top: 5px;
        }
        .nowWay{
          background: red;
          color: #fff;
        }
      }
      .address{
        background: #fff;
        padding: 10px;
        border-radius: 5px;
        margin-top: 15px;
        div{
          div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;
            margin-top: 5px;
            img{
              width: 20px;
              height: 20px;
            }
          }
        }
        .selectAddress{
          text-align: center;
          color: #666;
          font-size: 15px;
        }
      }
      .bill{
        background: #fff;
        margin-bottom: 15px;
        border-radius: 6px;
        padding: 15px 0;
        font-size: 14px;
        margin-top: 15px;
        &>div{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 15px;
        }
        .self-taking{
          background: #efefef;
          padding: 5px 15px;
          span{
            background: red;
            color: #fff;
            padding: 2px 10px;
            border-radius: 8px;
            font-size: 10px;
          }
        }
        .dispatching{
          font-size: 14px;
        }
        .balance{
          color: blue;
          font-size: 13px;
          border-top: 1px solid #dfdfdf;
          padding: 10px 0;
          margin: 15px 15px 0;
          .num-price{
            width: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #999;
            .price{
              font-size: 17px;
              font-weight: bold;
              color: #000;
            }
          }
        }
        ul{
          padding: 5px 15px;
          li{
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            align-items: center;
            color: #999;
            margin-bottom: 15px;
            .li-left{
              display: flex;
              align-items: center;
              text-align: left;
              img{
                width: 35px;
                height: 35px;
                margin-right: 8px;
              }
              .title{
                font-size: 14px;
                color: #666;
              }
            }
            .num-price{
              width: 100px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .unit-price{
                font-size: 14px;
                color: #000;
              }
            }
          }
        }
      }
      .info{
        background: #fff;
        border-radius: 5px;
        margin-top: 10px;
        padding: 10px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        .info-right{
          width: 70%;
          text-align: right;
          color: #999;
          font-size: 13px;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap
        }
      }
    }
    .settlement-bottom{
      height: 50px;
      background: #fff;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      div{
        width: 80px;
        line-height: 50px;
      }
      .settlement-btn{
        width: 100px;
        background: red;
        color: #fff;
      }
    }
  }
</style>
