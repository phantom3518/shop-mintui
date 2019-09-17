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
      //点击购物车，保存商品牌信息到store中的car上
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
    }
  },
  getters: {//this.$store.getters
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item=> {
        c += item.count
      })
      return c
    }
  },
  actions: {

  }
})
