import axios from 'axios'
// import config from '../config'

export default {
    fetchLive() {
        return axios.get('/live')
            .then(res => {
                return res
            })
            .catch(err => {

            })
    }
}