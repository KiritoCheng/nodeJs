/**
 * Created by Kirito on 2016/10/28.
 */

//NodeJS全局对象
console.log(__filename, '\n', __dirname);
function setClock() {
    console.log(new Date().toLocaleString());
}
// setInterval(setClock,1000);
var t = setTimeout(console.log('执行'), 2000);
clearTimeout(t);
process.on('exit', function (code) {
    // setTimeout(console.log('该代码不会执行'), 0);
    console.log('程序退出：', code)
});
process.stdout.write('输出到终端\n');
process.argv.forEach(function (val, index, array) {
    console.log(index + ':' + val)
});
console.log('当前目录：', process.cwd());
console.log('当前版本：', process.version);
console.log('内存使用情况：', process.memoryUsage());
console.log('执行路径：', process.execPath);
console.log('平台信息：', process.platform);