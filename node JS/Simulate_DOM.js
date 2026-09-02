const { EventEmitter } = require('events')

class button extends EventEmitter {}

const buttons = new button();

buttons.on('click' , () => {console.log('SARTHAK! ,button clicked!')});
buttons.on('mouseover' , () => console.log('SARTHAK! ,mouse is over the button.'));

buttons.emit('click');
buttons.emit('mouseover');