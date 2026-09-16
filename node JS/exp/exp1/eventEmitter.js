const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet',(name) =>{
    console.log(`hello , ${name}! Welcome to ABES EC`);
});

myEmitter.on('exit' , () => {
    console.log("Application Closed.");
})

myEmitter.on('login' , (log_in) => {
    console.log(`hye ${log_in}! successfully loged in...`);
})
myEmitter.on('logout' , (log_out) => {
    console.log(`hye ${log_out}! successfully loged out...`);
})

myEmitter.emit('greet','2nd year');
myEmitter.emit('exit');
myEmitter.emit('login' , 'sarthak')
myEmitter.emit('logout' , 'sarthak')
