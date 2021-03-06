import actions from './actions'
import getters from './getters'
import { FETCH_MATCH_DETAIL, FETCH_LOTTERY_WITH_EXPERT, FETCH_MATCH_COMMENTS } from '@/store/mutation-types'

const state = {
    matchDetail: {},
    lotteryWithExpert: {},
    matchComments: {}
}

const mutations = {
    [FETCH_MATCH_DETAIL](state, detail) {
        state.matchDetail = detail
    },
    [FETCH_LOTTERY_WITH_EXPERT](state, res) {
        state.lotteryWithExpert = res
    },
    [FETCH_MATCH_COMMENTS](state, comments) {
        state.matchComments = comments
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}