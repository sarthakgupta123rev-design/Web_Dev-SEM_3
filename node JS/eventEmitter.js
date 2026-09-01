const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet',(name) =>{
    console.log(`hello , ${name}! Welcome to ABES EC`);
});

myEmitter.on('exit' , () => {
    console.log("Application Closed.");
})

myEmitter.emit('greet','2nd year');
myEmitter.emit('exit');
