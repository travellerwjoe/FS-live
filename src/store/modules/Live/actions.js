import * as types from '@/store/mutation-types'
import api from '@/api/match'
import socket from '@/socket'

export default {
    fetchLive({ commit }) {
        socket.on('fetchLive', function (res) {
            res.status === 200 && res.result === 'success' && commit(types.FETCH_LIVE, res.rs)
        })
        socket.emit('fetchLive')
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