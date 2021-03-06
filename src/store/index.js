import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import Live from './modules/Live'
import MatchDetail from './modules/MatchDetail'
import { PUSH_TO_GOALING_QUEUE, SHIFT_FROM_GOALING_QUEUE } from './mutation-types'
Vue.use(Vuex)

const state = {
    goalingQueue: []
}

const mutations = {
    // 添加到进球信息到进球队列
    [PUSH_TO_GOALING_QUEUE](state, item) {
        state.goalingQueue.push(item)
    },
    [SHIFT_FROM_GOALING_QUEUE](state) {
        state.goalingQueue.shift()
    }
}

const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules: {
        Live,
        MatchDetail
    }
})

export default store