/**
 * Created by Kirito on 2016/10/27.
 */

//EventEmitter事件触发器

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function () {
    console.log('事件触发')
});
setTimeout(function () {
    event.emit('some_event')
}, 1000);

// 监听多个事件
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function (arg1, arg2) {
    console.log('事件监听1', arg1, arg2)
});
emitter.on('someEvent', function (arg1, arg2) {
    console.log('事件监听2', arg1, arg2)
});
emitter.emit('someEvent','参数1','参数2')
