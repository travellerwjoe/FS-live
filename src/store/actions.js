import { PUSH_TO_GOALING_QUEUE, SHIFT_FROM_GOALING_QUEUE, ASSIGN_GOALINGITEM } from './mutation-types'

export default {
    pushToGoalingQueue({ commit, dispatch }, item) {
        commit(PUSH_TO_GOALING_QUEUE, item)
    },
    shiftFromGoalingQueue({ commit }) {
        commit(SHIFT_FROM_GOALING_QUEUE)
    },
    notifyGoaling({ state, dispatch, commit }) {
        // debugger
        // state.goalingItem = state.goalingQueue.shift()
        commit(ASSIGN_GOALINGITEM, state.goalingQueue.shift())
        // console.log('xxxxx')
        setTimeout(() => {
            commit(ASSIGN_GOALINGITEM, null)
            setTimeout(() => {
                const hasGoaling = !!state.goalingQueue.length
                if (hasGoaling) {
                    dispatch('notifyGoaling')
                }
            }, 1000)
        }, 3000)
    }
}