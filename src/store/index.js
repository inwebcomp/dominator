import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import route from './modules/route'

export default new Vuex.Store({
    modules: {
        route
    }
})
