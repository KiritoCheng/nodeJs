//目录

var fs = require("fs");

fs.mkdir("./test/testDir", function (err) {
    if (err) return console.log(err);
    console.log("目录创建成功");
});

fs.readdir("./test", function (err, files) {
    if (err) return console.log(err);
    files.forEach(function (file) {
        console.log(file);
    })
});

fs.rmdir("./test/testDir", function (err) {
    if (err) return console.log(err);
    fs.readdir("./test", function (err, files) {
        files.forEach(function (file) {
            console.log(file);
        })
    })
});
