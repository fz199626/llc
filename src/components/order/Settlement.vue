<template>
  <div class="settlement">
    <div class="settlement-content">
      <div class="way">
        <div><h2>国顺东路店</h2><p>国顺东路800号西楼2楼007店</p></div>
        <div>
          <span @click="selectWay(1)" :class="{nowWay:this.$store.state.nowWay == 1}">到店<br/>自取</span>
          <span @click="selectWay(2)" :class="{nowWay:this.$store.state.nowWay == 2}">外卖<br/>配送</span>
        </div>
      </div>
      <div class="address" v-if="this.$store.state.nowWay == 2">
        <div v-if="orderAddress != ''">
          <h4>{{orderAddress.address_info}}{{orderAddress.door_plate}}</h4>
          <div>
            <p><span>收货人：{{orderAddress.name}}</span><span>{{orderAddress.tel}}</span></p>
            <div @click="selectAddress"><img src="@/assets/editAddress.png"/></div>
          </div>
        </div>
        <div class="selectAddress" v-else @click="selectAddress">添加地址</div>
      </div>
      <div class="bill">
        <ul>
          <li v-for="item in cardList" :key="item.id">
            <div class="li-left">
              <img :src="item.image"/>
              <div><p class="title">{{item.name}}</p></div>
            </div>
            <div class="num-price">
              <span>x{{item.num}}</span>
              <span class="unit-price">￥{{item.price}}</span>
            </div>
          </li>
        </ul>
        <div class="dispatching"><span>配送费</span><span>￥{{orderInfo.fee}}</span></div>
        <div class="balance">
          <a href="tel:18917293695">联系商家</a>
          <div class="num-price"><span>x{{orderInfo.num}}</span><span class="price">￥{{orderInfo.total_price}}</span></div>
        </div>
      </div>
      <div class="info"><span>优惠券</span><span class="info-right">暂未开放</span></div>
      <div class="info" @click="openRemarks">
        <span>备注信息</span>
        <span class="info-right" v-if="remarks == ''">需要打包/加料等</span>
        <span class="info-right" v-else>{{remarks}}</span>
      </div>
    </div>
    <div v-show="isShowRemarks" class="remarks">
      <div class="remarks-cont">
        <textarea  maxlength="60" @input="remarkInput" v-model="remarks" placeholder="请填写备注信息"></textarea>
        <p class="remnant">{{remnant}}/60</p>
        <div @click="closeRemarks" class="remarks-btn">确 定</div>
      </div>
    </div>
    <div class="settlement-bottom">
      <div>￥{{orderInfo.total_price}}</div>
      <div class="settlement-btn" @click="pay">支付</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        cardList: this.$store.state.cardList,
        orderAddress: this.$store.state.orderAddress,
        orderInfo: [],
        isShowRemarks: false,
        remnant: 60,
        remarks: ''
      }
    },
    computed: {
      listenstage(){
        return this.$store.state.nowWay;
      }
    },
    watch: {
      listenstage(){
        this.settlement()
      }
    },
    mounted(){
      // window.addEventListener("popstate", function(e) {
      //   window.location.replace("/")
      // }, false);
      this.settlement()
    },
    methods: {
      settlement(){
        let freightUrl = "http://linlinchi.auteng.cn/order/freight-budget"
        let data = {
          nowWay: this.$store.state.nowWay,
          orderAddress: this.$store.state.orderAddress.id,
          cardList: this.$store.state.cardList
        }
        this.axios.post(freightUrl,data).then( res => {
          this.orderInfo = res.data.data
        })
      },
      selectWay(nowWay){
        this.$store.commit('selectWay',nowWay)
      },
      selectAddress(){
        this.$store.commit('setAddress')
        this.$router.push('/address')
      },
      openRemarks(){
        this.isShowRemarks = !this.isShowRemarks
      },
      closeRemarks(){
        this.isShowRemarks = !this.isShowRemarks
      },
      remarkInput(){
        var txtVal = this.remarks.length;
        this.remnant = 60 - txtVal;
      },
      pay(){
        let payUrl
        if(this.$store.state.nowWay == 1){
          payUrl = "http://linlinchi.auteng.cn/pay/wechat-pay"
        }else if(this.$store.state.nowWay == 2){
          if(this.$store.state.orderAddress.id){
            payUrl = "http://linlinchi.auteng.cn/pay/wechat-pay"
          }else {
            alert("请选择地址")
          }
        }
        let data = {
          nowWay: this.$store.state.nowWay,
          orderAddress: this.$store.state.orderAddress.id,
          cardList: this.$store.state.cardList,
          remarks: this.remarks,
          orderInfo: this.orderInfo
        }
        this.axios.post(payUrl,data).then( res => {
          if(res.data.success){
            this.weixinPay(res.data)
          }
        })
      },
      weixinPay(data){
        var vm = this;
        if(typeof WeixinJSBridge == "undefined"){
          if(document.addEventListener){
            document.addEventListener('WeixinJSBridgeReady', vm.onBridgeReady(data.data), false);
          }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', vm.onBridgeReady(data.data));
            document.attachEvent('onWeixinJSBridgeReady',vm.onBridgeReady(data.data));
          }
        }else{
          vm.onBridgeReady(data);
        }
      },
      onBridgeReady(data){
        let payresUrl = "http://linlinchi.auteng.cn/order/order-status"
        let datares
        var vm = this;
        WeixinJSBridge.invoke('getBrandWCPayRequest', data.data, function(res){
          vm.$router.push('/bill');
          vm.$store.commit('clear')
          if(res.err_msg == "get_brand_wcpay_request:ok" ){
            console.log("支付成功！")
            datares = {order_id: data.msg, status: 1}
          }else if(res.err_msg == "get_brand_wcpay_request:cancel"){
            alert("取消支付！")
            datares = {order_id: data.msg, status: 6}
          }else if(res.err_msg == "get_brand_wcpay_request:fail"){
            datares = {order_id: data.msg, status: 6}
          }
          vm.axios.post(payresUrl,datares).then( res => {
            console.log(res.data.success)
          })
        })
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
          font-size: 13px;
          border-top: 1px solid #dfdfdf;
          padding: 10px 0;
          margin: 15px 15px 0;
          a{
          color: blue;
          }
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
                width: 40px;
                height: 30px;
                margin-right: 8px;
              }
              .title{
                font-size: 14px;
                color: #666;
                width: 150px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
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
    .remarks{
      z-index: 99;
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
          background: #01b928;
          color: #fff;
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
