import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Translator from './services/Translator'

let Lang = new Translator({})

Vue.config.productionTip = false

Vue.mixin({
    methods: {
        __: function (...args) {
            return Lang.get(...args)
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')