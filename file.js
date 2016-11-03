/**
 * Created by Kirito on 2016/10/28.
 */

//文件系统
var fs = require('fs');

// 异步读取
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log("异步读取: " + data.toString());
});
// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

//异步打开文件
fs.open('input.txt', 'r+', function (err, fd) {
    if (err)  return console.log(err);
    console.log("文件打开成功");
});
//获取文件信息
fs.stat('input.txt', function (err, starts) {
    if (err)  return console.log(err);
    console.log(starts);
    console.log("读取文件信息成功");
    console.log("文件类型：", starts.isFile() ? '文件' : starts.isDirectory() && '目录')
});
//写入文件
fs.writeFile('file.txt', '我是写入的内容！！！', function (err, data) {
    if (err) console.log(err);
    console.log('读取写入成功！');
    fs.readFile('file.txt', function (err, data) {
        if (err) console.log(err);
        console.log('异步读取文件数据：' + data.toString());
    });
});

console.log('—————华丽的分割线———————');
//读取文件
var buf = new Buffer(1024);
fs.open('file.txt', 'r+', function (err, fd) {
    if (err)  return console.log(err);
    console.log("打开file.txt");
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err)  return console.log(err);
        console.log(bytes + '字节被读取');
        if (bytes > 0) {
            console.log('file.txt内容：',buf.slice(0, bytes).toString())
        }
    });
});