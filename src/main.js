import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
Vue.use(firestorePlugin)
Vue.use(VueRouter)

Vue.config.productionTip = false

import Home from '@/components/Home'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home'
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
