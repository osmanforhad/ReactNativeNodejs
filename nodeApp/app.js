//define the event class
const EventEmitter = require('events');

//cretae the instance of the event class
const emitter = new EventEmitter();

//register an event
emitter.on('greeting', (arg) => {
    console.log('This is the event class', arg.name);
});

//triger the event
emitter.emit('greeting', { name: 'osman forhad' });

//file system
// const fs = require('fs');

// fs.readFile('./test.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(data.toString());
// })