/**
 * Created by Kirito on 2016/10/31.
 */

var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "user.json", 'UTF-8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

//添加数据
var newUser = {
    "user4": {
        "name": "D",
        "password": "password4",
        "profession": "doctor",
        "id": "3"
    }
};
app.get('/addUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "user.json", 'UTF-8', function (err, data) {
        data = JSON.parse(data);
        data["user4"] = newUser["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

//删除数据
var id = 2;
app.get('/deleteUser', function (req, res) {
    fs.readFile(__dirname + "/" + "user.json", 'UTF-8', function (err, data) {
        data = JSON.parse(data);
        delete data["user" + id];
        console.log(data);
        res.end(JSON.stringify(data));
    })
});

var server = app.listen(8879, function () {
    var host = server.address().address;
    var port = server.address().port;
});