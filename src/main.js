import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
import '../src/assets/mui/css/mui.min.css'
import '../src/assets/mui/css/icons-extra.css'
import moment from 'moment'
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Header.name, Header)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)
Vue.use(MintUI)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// import { Button } from 'mint-ui'
// Vue.component(Button.name, Button)

//全局过滤器

Vue.filter('dataFormat',function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
   return moment(dataStr).format(pattern)
})
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//组件挂载到VM实例上就都能访问
