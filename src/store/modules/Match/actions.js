import * as types from '@/store/mutation-types'
import api from '@/api/match'

export default {
    fetchLive({ commit }) {
        api.fetchLive()
            .then(res => {
                const data = res.data
                data.status === 200 && data.result === 'success' && commit(types.FETCH_LIVE, data.rs)
            })
            .catch(err => {

            })
    }
}