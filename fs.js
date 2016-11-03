/*nodeJs 回调函数*/
var fs = require("fs");

var data1 = fs.readFileSync('input.txt');

console.log(data1.toString());
console.log("阻塞代码程序执行结束!");
//先读取input.txt再执行程序 readFileSync

fs.readFile('input.txt', function (err, data) {
    if (err) return console.log(err);
    console.log(data.toString())
});
console.log('非阻塞代码程序执行结束');
//边读取文件边执行程序    readFile