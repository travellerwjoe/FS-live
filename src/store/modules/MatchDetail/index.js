import actions from './actions'
import getters from './getters'
import { FETCH_MATCH_DETAIL, FETCH_LOTTERY_WITH_EXPERT } from '@/store/mutation-types'

const state = {
    matchDetail: {},
    lotteryWithExpert: {}
}

const mutations = {
    [FETCH_MATCH_DETAIL](state, detail) {
        state.matchDetail = detail
    },
    [FETCH_LOTTERY_WITH_EXPERT](state, res) {
        state.lotteryWithExpert = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}