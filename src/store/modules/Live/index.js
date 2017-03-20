import actions from './actions'
import getters from './getters'
import { FETCH_LIVE, ADD_TO_GOALING_QUEUE } from '@/store/mutation-types'

const state = {
    live: [],
    goalingQueue: []
}

const mutations = {
    [FETCH_LIVE](state, live) {
        state.live = live
    },
    // 添加到进球信息到进球队列
    [ADD_TO_GOALING_QUEUE](state, item) {
        state.goalingQueue.push(item)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}