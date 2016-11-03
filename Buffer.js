/**
 * Created by Kirito on 2016/10/27.
 */

//Buffer缓冲区
var buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString(undefined, 0, 5));

console.log('---华丽的分割线----');


var buf2 = new Buffer('abcde');
var buf2Json = buf2.toJSON(buf2);
console.log(buf2Json);

var buffer1 = new Buffer('你好');
var buffer2 = new Buffer('，');
var buffer3 = new Buffer('旅行者');
console.log(Buffer.concat([buffer1, buffer2, buffer3]).toString());

var bufBig = new Buffer('123');
var bufSmall = new Buffer('1');
var result = bufBig.compare(bufSmall);
console.log('result：', result);

var bufferCopy = bufBig.copy(new Buffer(2));
console.log(bufferCopy.toString());

var bufferSlice = bufBig.slice(0, 2);
console.log(bufferSlice.toString(),buffer3.length);