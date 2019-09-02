import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
import '../src/assets/mui/css/mui.min.css'
Vue.component(Header.name, Header)
// Vue.use(MintUI)

// import { Button } from 'mint-ui'
// Vue.component(Button.name, Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
