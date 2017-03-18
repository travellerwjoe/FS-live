import actions from './actions'
import getters from './getters'
import * as types from '@/store/mutation-types'

const state = {
    live: [],
    goaling: []
}

const mutations = {
    [types.FETCH_LIVE](state, live) {
        state.live = live
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}