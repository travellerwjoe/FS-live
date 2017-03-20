import { ADD_TO_GOALING_QUEUE } from '@/store/mutation-types'

export default {
    addToGoalingQueue({ commit }, item) {
        commit(ADD_TO_GOALING_QUEUE, item)
    }
}