<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img class="active" src="@/assets/n-order.png"/>
        <img class="active-ing" src="@/assets/n-ordering.png"/>
        <div>点单</div>
      </router-link>
      <router-link to="/bill">
        <img class="active" src="@/assets/n-bill.png"/>
        <img class="active-ing" src="@/assets/n-billing.png"/>
        <div>订单</div>
      </router-link>
      <router-link to="/mine">
        <img class="active" src="@/assets/n-mine.png"/>
        <img class="active-ing" src="@/assets/n-mineing.png"/>
        <div>我的</div>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    created () {
      //在页面加载时读取sessionStorage里的状态信息
      if (localStorage.getItem("store")){
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("store"))))
      }
      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
        localStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    }
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  a{
    color: #2c3e50;
    text-decoration: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 500px;
    margin: 0 auto;
  }
  #nav {
    background: #fff;
    height: 50px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    a {
      flex: 1;
      text-decoration: none;
      font-weight: bold;
      color: #999;
      font-size: 0;
      .active{
        display: block;
        margin: auto;
      }
      .active-ing{
        display: none;
        margin: auto;
      }
      &.router-link-exact-active {
        color: #2c3e50;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
        outline:none;
        background: none;
        text-decoration: none;
        .active{
          display: none;
        }
        .active-ing{
          display: block;
        }
      }
      img{
        width: 25px;
        height: 25px;
      }
      div{
        height: 20px;
        font-size: 10px;
      }
    }
  }
</style>
