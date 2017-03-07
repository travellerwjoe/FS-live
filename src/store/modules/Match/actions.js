import * as types from '@/store/mutation-types'
import api from '@/api/match'

export default {
    fetchLive({ commit }) {
        api.fetchLive()
            .then(res => {
                commit(types.FETCH_LIVE, res.data)
            })
            .catch(err => {
                
            })
    }
}