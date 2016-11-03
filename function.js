//函数

function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");


//匿名函数
execute(function (word) {
    console.log(word)
}, "Hello，匿名函数");

//服务器匿名函数
var http = require('http');
function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    response.write("<h2 style='color: #0099ff'>Hello,服务器匿名函数</h2>");
    response.end();
}
http.createServer(onRequest).listen(8887);