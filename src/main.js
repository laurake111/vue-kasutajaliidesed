import Vue from 'vue'
import App from './App.vue'
import router from './Router/router'
import json from "./sock.json"

Vue.config.productionTip = false

let shoppingCart = []


const socks = {men:json}

socks.install = function(){
    Object.defineProperty(Vue.prototype, '$socks', {
        get () { return json }
    })
    Object.defineProperty(Vue.prototype, '$shoppingCart', {
        get () { return shoppingCart }
    })
}
Vue.use(socks);

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
