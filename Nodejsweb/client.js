/**
 * Created by Kirito on 2016/10/29.
 */

//客户端

var http = require('http');
// 用户请求的选项
var options = {
    host: 'localhost',
    port: '8883',
    path: 'index.html'
};

//处理相应的回调函数
var callback = function (res) {
    //不断更新数据
    var body = '';
    res.on('data', function (data) {
        body += data;
    });
    res.on('end', function () {
        //数据接收完成
        console.log(body);
    })
};

//向服务端发送请求
var req = http.request(options, callback);
req.end();