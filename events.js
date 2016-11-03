/*事件函数*/

//1、引入模块，创建对象
var events = require('events');
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功');
    //3、触发事件
    eventEmitter.emit('data_received');
};
//2、绑定事件
eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function () {
    console.log('数据接收成功');
});
eventEmitter.emit('connection');

console.log('事件函数实例执行完毕');


//应用程序事件函数
var fs = require('fs');
fs.readFile('input.txt', function (err, data) {
    if (err) return console.log(err.stack);
    console.log(data.toString());
});
console.log('应用程序事件函数执行完毕');



