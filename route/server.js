/**
 * Created by Kirito on 2016/10/28.
 */

//服务器
var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("接收地址：", pathname);
        var html=route(pathname);
        response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        response.write(html);
        response.end('这是公用的尾部\n');
    }

    http.createServer(onRequest).listen(8886);
    console.log('服务开始');
}
exports.start = start;