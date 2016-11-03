/**
 * Created by Kirito on 2016/10/28.
 */
//util


// 、inherits
var util = require('util');
function Base() {
    this.name = '小A';
    this.base = 1991;
    this.sayHello = function () {
        console.log('你好 ' + this.name)
    }
}
//继承加入showname方法
Base.prototype.showName = function () {
    console.log(this.name)
};
function Sub() {
    this.name = '小B';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log('objBase：', objBase);
var objSub = new Sub();
objSub.showName();
console.log(objSub);

console.log('—————华丽的分割线—————');

// 、inspect
function Person() {
    this.name = '小C';
    this.toString = function () {
        return this.name;
    }
}
var obj = new Person();
console.log(obj);
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));


console.log('—————华丽的分割线——————');

//、isArray(obj),isRegExp,isDate,isError
console.log(util.isArray([]));
console.log(util.isArray(obj));
console.log(util.isArray({}));
console.log(new RegExp('123'));
console.log(new Error());
console.log(new Date())
console.log(Date())