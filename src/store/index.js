import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import Live from './modules/Live'

Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    getters,
    modules: {
        Live
    }
})

export default store