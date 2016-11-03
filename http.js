/**
 * Created by Kirito on 2016/10/29.
 */

//Get 和 Post
var http = require('http');
var url = require('url');
var util = require('util');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'Text/plain'});
    res.end(util.inspect(url.parse(req.url, true)))
}).listen(8885);


var querystring = require('querystring');
http.createServer(function (req, res) {
    var post = "";
    req.on('data', function (chunk) {
        post += chunk;
    });
    req.on('end', function () {
        post = querystring.parse(post);
        res.end(util.inspect(post))
    })
}).listen(8884);