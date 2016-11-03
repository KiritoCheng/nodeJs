/**
 * Created by Kirito on 2016/10/27.
 */
//eventEmitter方法汇总
var events = require('events');
var eventEmitter = new events.EventEmitter();

//创建多个监听器
var listener1 = function listener1() {
    console.log('监听器1执行。');
};
var listener2 = function listener2() {
    console.log('监听器2执行。');
};

//绑定事件
eventEmitter.on('connection', listener1);
eventEmitter.addListener('connection', listener2);
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件");

//触发事件
eventEmitter.emit('connection');

//移除监听器
eventEmitter.removeListener('connection',listener1);
console.log('监听器1不再监听');

//触发事件
eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件");