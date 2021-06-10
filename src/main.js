import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// Vue Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// animejs
import anime from 'animejs/lib/anime.es.js'
    
Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.prototype.$anime = anime

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
