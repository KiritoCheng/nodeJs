//路由
var express = require('express');
var app = express();

//主页
app.get('/',function (req, res) {
    console.log("主页 GET 请求");
    res.send('<h2><a href="/A">GET 请求主页</a></h2>');
});
app.post('/',function (req, res) {
    console.log("主页 POST 请求");
    res.send('<h2>POST 请求主页</h2>');
});

//页面A
app.get('/A',function (req, res) {
    console.log('页面A请求')
    res.send('<a href="/B">页面A</a>')
});
app.get('/B',function (req, res) {
    console.log('页面B请求')
    res.send('<a href="/">页面A</a>')
});

var server = app.listen(8881, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://$s:$s", host, port);
});