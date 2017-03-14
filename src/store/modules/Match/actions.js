import * as types from '@/store/mutation-types'
import api from '@/api/match'
import socket from '@/socket'

export default {
    fetchLive({ commit }, stopFetch) {
        socket.on('fetchLive', function (res) {
            res.status === 200 && res.result === 'success' && commit(types.FETCH_LIVE, res.rs)
        })
        socket.emit('fetchLive', stopFetch)
    },
    socketConnect({ commit }) {
        console.log('socketConnect')
        socket.open()
    },
    socketDisconnect({ commit }) {
        console.log('socketDisconnect')
        socket.disconnect()
    }
}