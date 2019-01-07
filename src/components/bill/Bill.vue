<template>
  <div class="bill">
    <ul>
      <li>
        <div class="self-taking"><p>凭手机号前往[XX店]自取</p><span>自取</span></div>
        <div class="odd-numbers"><p>订单 : 188888888</p><span>配送中</span></div>
        <ul>
          <li>
            <div class="li-left">
              <img src="@/assets/n-mine.png"/>
              <div>
                <span class="title">奶茶</span><br />
                <span>大/热/无糖</span>
              </div>
            </div>
            <div class="num-price">
              <span>x1</span>
              <span class="unit-price">￥19</span>
            </div>
          </li>
          <li>
            <div class="li-left">
              <img src="@/assets/n-mine.png"/>
              <div>
                <span class="title">奶茶</span><br />
                <span>大/热/无糖</span>
              </div>
            </div>
            <div class="num-price">
              <span>x1</span>
              <span class="unit-price">￥19</span>
            </div>
          </li>
        </ul>
        <div class="dispatching"><span>配送费</span><span>￥5</span></div>
        <div class="red-packet"><span>红包</span><span>-￥15</span></div>
        <div class="balance">
          <span>2018/12/11</span>
          <div class="num-price">
            <span>x3</span>
            <span class="price">￥150</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

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
          span{
            background: red;
            color: #fff;
            padding: 2px 10px;
            border-radius: 8px;
            font-size: 10px;
          }
        }
        .odd-numbers{
          font-size: 15px;
          font-weight: bold;
          span{
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
              img{
                width: 35px;
                height: 35px;
                margin-right: 5px;
              }
              .title{
                font-size: 14px;
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
