var hello = require('./hello');
console.log(hello.Hello() + ' World');

var Student = require('./student');
var student = new Student();
student.setName('Jack');
student.sayHello();