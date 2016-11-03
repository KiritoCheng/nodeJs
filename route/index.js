/**
 * Created by Kirito on 2016/10/28.
 */

//nodeJS路由
var server = require("./server");
var router = require("./route");
server.start(router.route);