import actions from './actions'
import getters from './getters'
import { FETCH_MATCH_DETAIL } from '@/store/mutation-types'

const state = {
    matchDetail: {}
}

const mutations = {
    [FETCH_MATCH_DETAIL](state, detail) {
        state.matchDetail = detail
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}