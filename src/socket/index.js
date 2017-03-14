import io from 'socket.io-client'
import config from '@/config'

const socket = io(config.server, {
    reconnection: true
})
export default socket