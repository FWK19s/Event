// const events = require('events');
// const eventEmitter = new events.EventEmitter();
// const connectHandler = function connected() {
//    console.log('connection succesful.'); 
//    eventEmitter.emit('data_received');
// }
// eventEmitter.on('connection', connectHandler);
// eventEmitter.on('data_received', function() {
//    console.log('data received succesfully.');
// });
// eventEmitter.emit('connection');
// console.log("Program Ended.");

const fs = require('fs');
fs.readFile('file.txt', function (err, data){
if (err) {
console.log(err);
return
} console.log(data.toString());
});
console.log("End of the program");
