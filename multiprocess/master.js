/**
 * Created by Kirito on 2016/10/31.
 */


const fs = require('fs');
const child_process = require('child_process');

// exec方法
for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.exec('node support.js ' + i,  //记住空格
        function (err, stdout, stderr) {
            if (err) {
                console.log(err.stack);
                console.log('Error code：' + err.code);
                console.log('Signal received：' + err.signal);
            }
            console.log("标准输出：" + stdout);
            stderr && console.log("标准错误：" + stderr);
        });

    workerProcess.on('exit', function (code) {
        console.log('子进程退出，退出码 ' + code)
    })
}


// spawn方法
for (var k = 0; k < 3; k++) {
    var workerProcessSpawn = child_process.spawn('node', ['support.js', k]);
    workerProcessSpawn.stdout.on('data', function (data) {
        console.log('标准输出：' + data)
    });
    workerProcessSpawn.stderr.on('data', function (data) {
        console.log('标准错误：' + data)
    });
    workerProcessSpawn.on('exit', function (code) {
        console.log('子进程退出，退出码 ' + code)
    })
}