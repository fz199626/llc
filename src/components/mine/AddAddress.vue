<template>
  <div class="addAddressBox">
    <div class="input-box-special">
      <div class="input-box"><span>联系人</span><input type="text" placeholder="姓名" v-model="addAddress.name"/></div>
      <div class="sex">
        <label v-for="(item, index) in sexs" @click="addClass(index)" :key="item.val" :class="{ red:index == addAddress.sex}" :for="(index)">
          {{ item.val }}<input :id="(index)" type="radio" :value="item.val"/>
        </label>
      </div>
    </div>
    <div class="input-box"><span>电话</span><input type="text" placeholder="手机号码" v-model="addAddress.tel"/></div>
    <div class="input-box"><span>地址</span><input type="text" placeholder="收货地址" v-model="addAddress.address_info" readonly="readonly" @click="mapShow"/></div>
    <div class="input-box"><span>门牌</span><input type="text" placeholder="几楼几室" v-model="addAddress.door_plate"/></div>
    <div class="default-btn">
      <input id="default" type="checkbox" value="设置默认地址" v-model="addAddress.isDefault"/>
      <label for="default">设置默认地址</label>
    </div>
    <div class="add-btn" @click="addBtn">确 认</div>
    <Map v-show="mapIsShow" @refres="onRefres"></Map>
  </div>
</template>

<script>
  import Map from '@/components/mine/Map.vue';

  export default {
    data() {
      return{
        sexs: [{ val: '先生'},{ val: '女士'}],
        addAddress: {
          id: 0,
          name: '',
          sex: 0,
          tel: '',
          address_info: '',
          door_plate: '',
          receiver_lng: '',
          receiver_lat: '',
          isDefault: false,
        },
        mapIsShow: false
      }
    },
    mounted() {
      this.edit()
    },
    methods: {
      edit(){
        if(this.$route.params.data){
          this.addAddress = this.$route.params.data
        }
      },
      mapShow(){
        this.mapIsShow = !this.mapIsShow
      },
      onRefres(data){
        this.mapIsShow = !this.mapIsShow
        let arr = data.location.split(",");
        this.addAddress.address_info = data.address
        this.addAddress.receiver_lng = arr[0]
        this.addAddress.receiver_lat = arr[1]
      },
      addBtn(){
        let addAddress = "http://linlinchi.auteng.cn/address/add"
        let data = this.addAddress
        this.axios.post(addAddress, data).then( res => {
          this.dataList = res.data.data
        })
      },
      addClass(index){
        this.addAddress.sex = index
      },
    },
    components: {
      Map,
    }
  }
</script>

<style scoped lang="less">
  .addAddressBox{
      z-index: 99;
      background: #eee;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      .input-box-special{
        background: #fff;
        padding-bottom: 15px;
        margin-top: 20px;
        .sex{
          margin: 5px 20%;
          text-align: left;
          label{
            margin: 0 5px;
            padding: 5px 15px;
            border-radius: 5px;
            color: #fff;
            font-size: 14px;
            background: #ccc;
          }
          .red{
            background: red;
          }
          input{
            display: none;
          }
        }
      }
      .input-box{
        height: 30px;
        line-height: 30px;
        background: #fff;
        margin-top: 10px;
        padding: 10px 0;
        color: #666;
        span{
          width: 20%;
          display: inline-block;
          text-align: center;
          font-weight: bold;
          font-size: 16px;
        }
        input{
          outline: none;
          height: 26px;
          width: 68%;
          border: 0;
          font-size: 15px;
          color: #666;
        }
      }
      .default-btn{
        text-align: right;
        padding: 20px;
        color: #666;
        font-size: 15px;
        input{
          width: 15px;
          height: 15px;
          margin-right: 5px;
          position: relative;
          top: 2px;
        }
      }
      .add-btn{
        color: #fff;
        background: green;
        width: 80%;
        margin: auto;
        padding: 10px 0;
        border-radius: 8px;
      }
    }
</style>
