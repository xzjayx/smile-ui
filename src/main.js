import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'
//只引入Button,select
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select, Form, FormItem, Input, Checkbox } from 'element-ui';
import router from './router/index'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
 

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
