import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/Home'
import NewsList from './components/news/NewsList'
import NewsInfo from './components/news/NewsInfo'
import Member from './components/tabbar/Member'
import Car from './components/tabbar/Car'
import Search from './components/tabbar/Search'
import PhotoList from './components/photos/PhotosList'
import PhotoInfo from './components/photos/photoInfo'
import GoodsList from './components/goods/goodList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/home/newslist',
      name: 'newslist',
      component: NewsList
    },
    {
      path: '/home/newslist/newsinfo/:id',
      name: 'newsinfo',
      component: NewsInfo
    },
    {
      path: '/home/photolist',
      name: 'photolist',
      component: PhotoList
    },
    {
      path: '/home/photoinfo/:id',
      name: 'photoinfo',
      component: PhotoInfo
    },
    {
      path: '/home/goodslist',
      name: 'goodslist',
      component: GoodsList
    },
  ],
  linkActiveClass: 'mui-active'
})
