import { FETCH_MATCH_DETAIL } from '@/store/mutation-types'
import api from '@/api/match'
import socket from '@/socket'

export default {
    fetchMatchDetail({ commit }, matchID) {
        socket.on('fetchMatchDetail', function (res) {
            res.status === 200 && res.result === 'success' && commit(FETCH_MATCH_DETAIL, res)
        })
        socket.emit('fetchMatchDetail', matchID)
    }
}