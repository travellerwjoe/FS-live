import { PUSH_TO_GOALING_QUEUE, SHIFT_FROM_GOALING_QUEUE } from '@/store/mutation-types'

export default {
    pushToGoalingQueue({ commit }, item) {
        commit(PUSH_TO_GOALING_QUEUE, item)
    },
    shiftFromGoalingQueue({ commit }) {
        commit(SHIFT_FROM_GOALING_QUEUE)
    }
}