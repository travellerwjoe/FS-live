import axios from 'axios'
import config from '../config'

const apiUrl = `${config.server}:${config.port}/api`

export default {
    fetchLive() {
        return axios.get('/api/live')
            .then(res => {
                return res
            })
            .catch(err => {

            })
    },
    fetchLotteryWithExpert(params) {
        const url = `${apiUrl}/lottery/expert/matchID/${params.matchID}/page/${params.page}`
        return axios.get(url)
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }
            })
            .catch(err => {

            })
    },
    fetchMatchComments(params) {
        const url = `${apiUrl}/comments/matchID/${params.matchID}/page/${params.page}`
        return axios.get(url)
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }
            })
            .catch(err => {

            })
    }
}