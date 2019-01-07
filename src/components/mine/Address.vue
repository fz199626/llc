<template>
  <div class="address">
    <router-link to="/addAddress" class="add-address">新增地址</router-link>
    <ul class="address-list">
      <li v-for="(item,index) in addressList" :key="item.id">
        <div class="address-left" @click="selectAdress(index)">
          <div>{{item.address}}</div>
          <div class="specific">{{item.specific}}</div>
          <div class="address-user">
            <span>{{item.name}}({{item.sex}})</span>
            <span>{{item.tel}}</span>
          </div>
        </div>
        <div class="edit" style=""><div @click="edit(index)"><img src="@/assets/logo.png"/></div>
          <span style="font-size: 12px" class="default" @click="setDefault(item.id)">默认地址</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        addressList: [
          {
            id: 3,
            address: '上海市成都北路333号',
            specific: '招商局广场南楼1003室',
            name: '徐志伟',
            sex: 0,
            tel: '15656834641',
            isDefault: true,
          },
          {
            id: 2,
            address: '上海市成都北路333号',
            specific: '招商局广场南楼1005室',
            name: '顾雨晨',
            sex: 1,
            tel: '15656834641',
            isDefault: false,
          }
        ]
      }
    },
    methods: {
      setDefault(id){
        console.log(id)
      },
      edit(index){
        this.$router.push({
          name:'addAddress',
          params:{
            data: this.addressList[index]
          }
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
            span{
              margin-right: 20px;
            }
          }
        }
        .edit{
          font-size: 0;
          text-align: center;
          img{
            width: 30px;
            height: 30px;
            margin: 5px 0;
          }
          .default{
            color: cornflowerblue;
          }
        }
      }
    }
  }
</style>
