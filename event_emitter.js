const EventEmitter = require('events')

var eventEmitter = new EventEmitter()

var out1 =  (msg) => {
    console.log("Msg recieved from out1: " + msg)
}

var out2 = (msg) => {
    console.log("Msg recieved from out2: " + msg)
}

eventEmitter.on('myEvent', out1)
eventEmitter.on('myEvent', out2)

eventEmitter.removeListener('myEvent',out1)

eventEmitter.removeAllListeners('myEvent')

eventEmitter.emit('myEvent', 'Event Occurred')

eventEmitter.emit('myEvent', 'Error Occurred')