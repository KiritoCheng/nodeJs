function student() {
    var studentName;
    this.setName = function (stuName) {
        studentName = stuName;
    };
    this.sayHello = function () {
        console.log("Hello,I'm ", studentName,"!");
    }
}
module.exports = student;