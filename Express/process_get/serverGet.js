/**
 * Created by Kirito on 2016/10/29.
 */

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function (req, res) {
    var response = {
        name: req.query.name,
        password: req.query.password
    };
    console.log(response);
    res.send(JSON.stringify(response))
});


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/process_post', urlencodedParser, function (req, res) {
    var response = {
        name_: req.body.name_,
        password_: req.body.password_
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8880, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});