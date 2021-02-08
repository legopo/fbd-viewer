import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueAxios from 'vue-axios'
import config from './axios'

Vue.config.productionTip = false

Vue.use(VueAxios, config)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
