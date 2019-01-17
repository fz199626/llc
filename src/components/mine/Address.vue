<template>
  <div class="address">
    <router-link to="/addAddress" class="add-address">新增地址</router-link>
    <ul class="address-list">
      <li v-for="(item,index) in addressList" :key="item.id">
        <div class="address-left" @click="selectAdress(index)">
          <div>{{item.address_info}}</div>
          <div class="specific">{{item.door_plate}}</div>
          <div class="address-user">
            <span class="user-name">{{item.name}}(<span v-if="item.sex == 0">先生</span><span v-else>女士</span>)</span>
            <span>{{item.tel}}</span>
          </div>
        </div>
        <div class="edit"><div @click="edit(index)"><img src="@/assets/editAddress.png"/></div>
          <!--<span class="default" @click="setDefault(item.id)">默认地址</span>-->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        addressList: []
      }
    },
    mounted() {
      this.address()
    },
    methods: {
      address() {
        let addressListUrl = "http://linlinchi.auteng.cn/address/list"
        this.axios.get(addressListUrl).then( res => {
          this.addressList = res.data.data.items
        })
      },
      setDefault(id){
        console.log(id)
      },
      edit(index){
        this.$router.push({
          name:'addAddress',
          params:{data: this.addressList[index]}
        })
      },
      selectAdress(index){
        if(this.$route.params.data){
          this.$store.commit('selectAdress',this.addressList[index])
          this.$router.push('/settlement')
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .address{
    background: #eee;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .add-address{
      display: inline-block;
      width: 100%;
      background: #fff;
      height: 45px;
      line-height: 45px;
      color: cornflowerblue;
      font-size: 16px;
    }
    .address-list{
      margin-top: 10px;
      background: #fff;
      list-style: none;
      li{
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        position: relative;
        border-bottom: 1px solid #eee;
        .address-left{
          font-size: 16px;
          flex: 1;
          .specific{
            font-size: 13px;
            color: #666;
            margin: 4px 0;
          }
          .address-user{
            font-size: 12px;
            color: #999;
            .user-name{
              margin-right: 10px;
            }
          }
        }
        .edit{
          font-size: 0;
          text-align: center;
          img{
            width: 20px;
            height: 20px;
            margin: 5px 0;
            opacity: 0.5;
          }
          .default{
            color: cornflowerblue;
            font-size: 12px
          }
        }
      }
    }
  }
</style>
