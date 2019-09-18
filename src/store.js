import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]') //JSON字符串转数组
export default new Vuex.Store({
  state: {//this.$store.state
    car:car
  },
  mutations: {//this.$store.commit('func',c)
    addToCat(state,goodsinfo) {
      //点击加入购物车，保存商品牌信息到store中的car上
      //假设购物车中没找到
      var flag = false
      state.car.some(item=> {
        if(item.id === goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag =true
          return true
        }
      })
      if(!flag) {
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car',JSON.stringify(state.car)) ////JSON数组转字符串
    },
    addCarCount(state,goods) {
      //点击加号直接添加
      state.car.some(item=> {
        if(goods.id == item.id) {
          item.count = parseInt(goods.count)
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))

    },
    removeCar(state,id) {
      state.car.some((item,i)=> {
        if(id == item.id) {
          state.car.splice(i,1)
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters: {//this.$store.getters
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item=> {
        c += item.count
      })
      return c
    },
    getGoodsCount(state) {
      var o = {}
      state.car.forEach(item=>{
        o[item.id] = item.count
      })
      return o
    }
  },
  actions: {

  }
})
