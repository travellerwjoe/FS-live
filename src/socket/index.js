import io from 'socket.io-client'
import config from '@/config'

const socket = io(`:${config.port}/`, {
    reconnection: true
})
export default socket