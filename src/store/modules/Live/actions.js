import { FETCH_LIVE, ADD_TO_GOALING_QUEUE } from '@/store/mutation-types'
import api from '@/api/match'
import socket from '@/socket'

export default {
    fetchLive({ commit }) {
        socket.on('fetchLive', function (res) {
            res.status === 200 && res.result === 'success' && commit(FETCH_LIVE, res.rs)
        })
        socket.emit('fetchLive')
    },
    addToGoalingQueue({ commit }, item) {
        commit(ADD_TO_GOALING_QUEUE, item)
    },
    socketConnect({ commit }) {
        console.log('socketConnect')
        socket.open()
        socket.emit('fetchLive')
    },
    socketDisconnect({ commit }) {
        console.log('socketDisconnect')
        socket.disconnect()
    }
}