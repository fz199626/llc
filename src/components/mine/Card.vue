<template>
  <div class="card">
    <div class="card-nav">
      <div v-for="(item,index) in card" :key="index" @click="tabNameClick(index)">
        <span :class="{choice:index == tabIndex}">{{item.tab}}</span>
      </div>
    </div>
    <div class="card-list">
      <ul v-for="(item,index) in card" :key="index" v-show="index == tabIndex">
        <li @click="use($event)">
          <div class="card-list-cont">
            <div>
              <div class="title">{{item.title}}</div>
              <div class="threshold">全国店/无门槛</div>
            </div>
            <img v-if="index == 1" src="@/assets/already-used.png"/>
            <img v-else-if="index == 2" src="@/assets/expired.png"/>
          </div>
          <div class="rule">
            <span>2018.12.12 - 2018.12.12</span>
            <span @click="goCardRule($event)">查看使用规则</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="shopping">
      <div class="gift-icon">
        <img src="@/assets/gift-icon.png"/>
        <span>卡卷不够用？想要获取更多礼包</span>
      </div>
      <router-link to="/" class="goTo">获取</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        card: [
          {"tab":"可使用","title":"可使用"},
          {"tab":"已使用","title":"已使用"},
          {"tab":"已过期","title":"已过期"}
        ],
        tabIndex: '',
      }
    },
    methods: {
      tabNameClick(index){
        this.tabIndex = index;
        console.log(index)
      },
      use(e){
        console.log(e.key)
      },
      goCardRule(e){
        console.log(e)
        this.$router.push({
          name:'cardRule',
          params:{
            title: "奶茶",
            threshold: 2,
            time: 1998,
            tabIndex: 2
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
.card{
  .card-nav{
    height: 50px;
    display: flex;
    justify-content: center;
    div{
      flex: 1;
      height: 50px;
      line-height: 50px;
      color: #999;
      span{
        display: inline-block;
        height: 45px;
        padding: 0 5px;
        border-bottom: 3px solid #fff;
      }
      .choice{
        color: #000;
        border-bottom: 3px solid #000;
      }
    }
  }
  .card-list{
    color: #fff;
    background: #eee;
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 50px;
    left: 0;
    padding: 20px 20px 0 20px;
    overflow: auto;
    &::-webkit-scrollbar{
      display:none;
    }
    ul{
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
          width: 90%;
          font-size: 10px;
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 10px;
        }
      }
    }
  }
  .shopping{
    height: 50px;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .gift-icon{
      color: red;
      font-size: 14px;
      position: relative;
      img{
        width: 40px;
        position: absolute;
        left: 10px;
        top: -2px;
      }
      span{
        margin-left: 50px;
      }
    }
    .goTo{
      padding: 0 30px;
      background: red;
      color: #fff;
      line-height: 50px;
      text-decoration: none;
    }
  }
}
</style>

