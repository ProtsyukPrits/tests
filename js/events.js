const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('anything', data => {
  console.log('On, anything', data)
})
emitter.emit('anything', { a: 1 })
emitter.emit('anything', { a: 2 })
setTimeout(() => {
  emitter.emit('anything', { c: 3 })
}, 1500)
