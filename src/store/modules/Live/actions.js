import { FETCH_LIVE } from '@/store/mutation-types'
import api from '@/api/match'
import socket from '@/socket'

export default {
    fetchLive({ commit, state }, isStop) {
        socket.on('fetchLive', function (res) {
            console.log('xxxxx')
            res.status === 200 && res.result === 'success' && commit(FETCH_LIVE, res.rs)
        })
        socket.emit('fetchLive', isStop)
        state.hasFetchLive = true
    },
    socketConnect({ commit }, e) {
        console.log('socketConnect')
        socket.open()
        event && socket.emit(e.event, e.args)
    },
    socketDisconnect({ commit }) {
        console.log('socketDisconnect')
        socket.disconnect()
    }
}