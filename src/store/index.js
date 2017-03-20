import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import Live from './modules/Live'
import { ADD_TO_GOALING_QUEUE } from './mutation-types'

Vue.use(Vuex)

const state = {
    goalingQueue: []
}

const mutations = {
    // 添加到进球信息到进球队列
    [ADD_TO_GOALING_QUEUE](state, item) {
        state.goalingQueue.push(item)
    }
}

const store = new Vuex.Store({
    state,
    actions,
    getters,
    modules: {
        Live
    }
})

export default store