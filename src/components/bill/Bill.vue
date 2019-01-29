<template>
  <div class="bill">
    <ul>
      <li v-for="item in billList" :key="item.id">
        <div class="self-taking" v-if="item.way == 1"><p>请前往[国顺东路800号西楼2楼007店]自取</p><span>{{item.status}}</span></div>
        <div class="odd-numbers">
          <p>订单 : {{item.order_num}}</p>
          <span v-if="item.way == 1" class="meal-code">
            <span v-if="item.status != '已取消'">取货码：{{item.meal_code}}</span>
          </span>
          <span v-else class="status">{{item.status}}</span>
        </div>
        <div>{{item.orderDetails.goods_info}}</div>
        <ul>
          <li v-for="good in item.orderDetails" :key="good.id">
            <div class="li-left">
              <img :src="good.goods_info.image"/>
              <div><p class="title">{{good.goods_info.name}}</p></div>
            </div>
            <div class="num-price">
              <span>x{{good.num}}</span>
              <span class="unit-price">￥{{good.goods_info.price}}</span>
            </div>
          </li>
        </ul>
        <div class="dispatching"><span>配送费</span><span>￥{{item.distribution_fee}}</span></div>
        <div class="red-packet"><span>优惠折扣</span><span>-￥0</span></div>
        <div class="address">
          <p>{{item.address}}</p>
          <p class="address-name"><span>{{item.contacts}}</span>{{item.tel}}</p>
        </div>
        <div class="balance">
          <span>{{item.create_time}}</span>
          <div class="num-price">
            <span>x{{item.num}}</span>
            <span class="price">￥{{item.total_price}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        billList: []
      }
    },
    mounted() {
      this.bill()
    },
    methods: {
      bill() {
        let billListUrl = "http://linlinchi.auteng.cn/order/my-order"
        this.axios.get(billListUrl).then( res => {
          this.billList = res.data.data.items
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .bill{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 51px;
    left: 0;
    overflow: auto;
    background: #efefef;
    &::-webkit-scrollbar{
      display:none;
    }
    &>ul{
      margin: 20px;
      list-style: none;
      &>li{
        background: #fff;
        margin-bottom: 20px;
        border-radius: 6px;
        padding: 15px 0;
        font-size: 14px;
        &>div{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 15px;
        }
        .self-taking{
          background: #efefef;
          padding: 5px 15px;
          font-size: 10px;
          p{
            width: 80%;
            text-align: left;
          }
          span{
            background: red;
            color: #fff;
            padding: 2px 10px;
            border-radius: 8px;
          }
        }
        .odd-numbers{
          font-size: 15px;
          font-weight: bold;
          .meal-code{
            color: #666;
            font-size: 12px;
          }
          .status{
            background: red;
            color: #fff;
            padding: 4px 10px;
            border-radius: 8px;
            font-size: 10px;
          }
        }
        .dispatching{
          font-size: 14px;
        }
        .red-packet{
          color: red;
        }
        .address{
          text-align: left;
          flex-wrap: wrap;
          color: #666;
          font-size: 13px;
          .address-name{
            color: #999;
            width: 100%;
            font-size: 12px;
            span{
              margin-right: 10px;
            }
          }
        }
        .balance{
          color: #999;
          font-size: 13px;
          border-top: 1px solid #dfdfdf;
          padding: 10px 0;
          margin: 15px 15px 0;
          .num-price{
            width: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .price{
              font-size: 18px;
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
              text-align: left;
              align-items: center;
              img{
                width: 40px;
                height: 30px;
                margin-right: 5px;
              }
              .title{
                font-size: 14px;
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
    }
  }
</style>
