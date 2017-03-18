import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import match from './modules/Live'

Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    getters,
    modules: {
        match
    }
})

export default store