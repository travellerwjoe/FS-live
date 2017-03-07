import actions from './actions'
import getters from './getters'
import * as types from '@/store/mutation-types'

const state = {
    live: {}
}

const mutations = {
    [types.FETCH_LIVE](state, { rs }) {
        state.live = rs
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}