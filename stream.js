/**
 * Created by Kirito on 2016/10/27.
 */
//stream流


var fs = require('fs');
var data = '';

//读取数据
//创建可读流
var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('UTF8');

//处理流事件
readStream.on('data', function (chunk) {
    data += chunk;
});
readStream.on('end', function () {
    console.log(data)
});
readStream.on('error', function (err) {
    console.log(err.stack);
});
console.log('程序执行完毕');


console.log('------华丽的分割线-----');


//写入流
//创建写入流
var dataImmit = '这是个output.txt，根据nodeJs写入'
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(dataImmit, 'UTF8');

//标记文件末尾
writeStream.end();

//处理流事件
writeStream.on('finish', function () {
    console.log('写入完成')
});
writeStream.on('error', function (err) {
    console.log(err.stack)
});
console.log('程序执行完毕');


console.log('------华丽的分割线-----');

//管道流
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('copy.txt');
writerStream.write('管道流：', 'UTF8');
readerStream.pipe(writerStream);     //管道读写操作
console.log('程序执行完毕');


console.log('------华丽的分割线-----');


//链式流（压缩文件，解压文件）
var zlib = require('zlib');
//压缩文件
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.rar'));
console.log('文件压缩完成');
//解压文件
fs.createReadStream('input.txt.rar')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('inputRar.txt'));
console.log('文件解压完成');