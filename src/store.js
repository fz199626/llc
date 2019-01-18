import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardList: [],
    cardNum: 0,
    nowWay: 2,
    orderAddress: [],
    total: 0
  },
  mutations: {
    add(state,good){
      state.cardNum ++
      state.total = state.total + Number(good.price)
      let data = {
        id: good.id,
        image: good.image,
        name: good.name,
        price: good.price,
        num: 1,
      }
      function findElem(arrayToSearch,attr,val){/*按照属性值，查找对象*/
        for (let i=0;i<arrayToSearch.length;i++){
          if(arrayToSearch[i][attr]==val){
            return i;
          }
        }
        return -1;
      }
      let index = findElem(state.cardList,"id",data.id);
      if(index >= 0){
        state.cardList[index].num ++
      }else {
        state.cardList.push(data);
      }
    },
    reduce(state,good){
      state.cardNum --
      function findElem(arrayToSearch,attr,val){/*按照属性值，查找对象*/
        for (let i=0;i<arrayToSearch.length;i++){
          if(arrayToSearch[i][attr]==val){
            return i;
          }
        }
        return -1;
      }
      let index = findElem(state.cardList,"id",good.id);
      if(state.cardList[index].num > 1){
        state.cardList[index].num --
      }else {
        state.cardList.splice(index,1)
      }
    },
    jian(state,index){
      state.cardNum --
      state.total = state.total - Number(state.cardList[index].price)
      if(state.cardList[index].num > 1){
        state.cardList[index].num --
      }else {
        state.cardList.splice(index,1)
      }
    },
    jia(state,index){
      state.total = state.total + Number(state.cardList[index].price)
      state.cardNum ++
      state.cardList[index].num ++
    },
    selectWay(state,nowWay){
      state.nowWay = nowWay
    },
    selectAdress(state,data){
      state.orderAddress = data
    },
    clear(state){
      state.cardList = [],
      state.cardNum = 0,
      state.nowWay = 2,
      state.total = 0
    }
  }
})
