<template>
  <div class="goodList">
    <div class="left">
      <ul><li v-for="(item,index) in dataList" :key="index" @click="tabNameClick(index)" :class="{selectd:tabIndex == index}">{{item.name}}</li></ul>
    </div>
    <div class="right">
      <div class="right-banner">
        <img src="@/assets/o-banner1.png"/><img src="@/assets/o-banner2.png"/>
      </div>
      <ul class="goodAll">
        <li v-for="(item,index) in dataList" :key="item.id" v-show="index == tabIndex">
          <div class="good-header">
            <div class="good-header-name">{{item.name}}</div><div class="good-header-br"></div>
          </div>
          <ul>
            <li class="good" v-for="(good,index) in item.goods" :key="index" @click="details(good)">
              <img class="good-icon" :src="good.image"/>
              <div class="good-details">
                <h4>{{good.name}}</h4>
                <p class="introduce">{{good.describe}}</p>
                <div>
                  <span class="price">￥{{good.price}}</span>
                  <div @click.stop>
                    <div v-for="cardLists in cardList" v-if="good.id == cardLists.id" :key="cardLists.id">
                      <span class="reduce-num" @click="reduceNum(good)">-</span>
                      <span class="good-num">{{cardLists.num}}</span>
                    </div>
                    <span class="add-num" @click="selection(good)">+</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="details-shade" v-show="isShowDetails" @click="closeDetails"></div>
    <div class="details" v-show="isShowDetails">
      <img :src="goodDetails.image"/>
      <div>
        <p>{{goodDetails.name}}</p>
        <p class="describe">{{goodDetails.describe}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataList: [],
        tabIndex: '',
        cardList: this.$store.state.cardList,
        isShowDetails: false,
        goodDetails: []
      }
    },
    mounted() {
      this.goodList()
    },
    methods: {
      goodList() {
        let goodListUrl = "http://linlinchi.auteng.cn/goods/list"
        this.axios.get(goodListUrl).then( res => {
          this.dataList = res.data.data
        })
      },
      tabNameClick(index){
        this.tabIndex = index
      },
      details(good){
        this.goodDetails = good
        this.isShowDetails = !this.isShowDetails
      },
      closeDetails(){
        this.isShowDetails = !this.isShowDetails
      },
      reduceNum(good){
        this.$store.commit('reduce',good)
      },
      selection(good){
        this.$store.commit('add',good)
      },
      addClass(index){
        this.current = index
      },
    }
  }
</script>

<style scoped lang="less">
.overflowOne(){
  width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goodList{
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 51px;
  left: 0;
  display: flex;
  .left{
    width: 80px;
    background: #efefef;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      display:none;
    }
    li{
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      border-left: 6px solid #efefef;
    }
    .selectd{
      background: #fff;
      border-left: 6px solid #ccc;
    }
  }
  .right{
    flex: 1;
    position: relative;
    text-align: left;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    &::-webkit-scrollbar{
      display:none;
    }
    .right-banner{
      font-size: 0;
      height: 172px;
      img{
        width: 100%;
        height: 86px;
      }
    }
    .goodAll{
      width: 100%;
      position: absolute;
      top: 172px;
      .good-header{
        height: 30px;
        line-height: 30px;
        display: flex;
        .good-header-name{
          padding-right: 15px;
          text-align: center;
          margin-left: 10px;
          font-size: 14px;
          color: #666;
          font-weight: bold;
        }
        .good-header-br{
          height: 15px;
          border-bottom: 1px solid #ddd;
          flex: 1;
        }
      }
      .good{
        font-size: 0;
        padding: 10px;
        display: flex;
        .good-icon{
          width: 80px;
          height: 60px;
          margin-right: 10px;
        }
        .good-details{
          flex: 1;
          font-size: 14px;
          h4{
            .overflowOne()
          }
          .introduce{
            color: #999;
            font-size: 12px;
            margin: 3px 0;
            .overflowOne()
          }
          div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .price{
              color: red;
              font-size: 15px;
            }
            .reduce-num,.add-num{
              display: inline-block;
              height: 14px;
              width: 14px;
              border-radius: 14px;
              text-align: center;
              line-height: 12px;
              color: #fff;
              margin-top: 2px;
              background: #ccc;
              font-size: 14px;
            }
            .good-num{
              margin: 0 10px;
              font-size: 14px;
            }
            .add-num{
              background: red;
              line-height: 15px;
            }
          }
        }
      }
    }
  }
  .details-shade{
    z-index: 9;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.5);
  }
  .details{
    z-index: 10;
    background: #fff;
    position: absolute;
    width: 200px;
    height: 250px;
    top: 50%;
    left: 50%;
    margin-top: -125px;
    margin-left: -100px;
    border-radius: 10px;
    padding: 20px;
    font-size: 15px;
    img{
      width: 200px;
      height: 150px;
      margin-bottom: 10px;
    }
    .describe{
      font-size: 12px;
      color: #666;
      text-align: left;
      margin-top: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
