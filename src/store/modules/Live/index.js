import actions from './actions'
import getters from './getters'
import { FETCH_LIVE } from '@/store/mutation-types'

const state = {
    live: []
}

const mutations = {
    [FETCH_LIVE](state, live) {
        state.live = live
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}