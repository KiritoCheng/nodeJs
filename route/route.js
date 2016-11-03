/**
 * Created by Kirito on 2016/10/28.
 */

//路由
var page = require('./controus');
var handle = {};
handle['/']=page.home;
handle['/home']=page.home;
handle['/blog']=page.blog;
function route(pathname) {
    console.log("路由接收地址：", pathname);
    if(typeof (handle[pathname])==='function'){
        return handle[pathname]();
    }else {
        return ('<h2 style="color: #ee0000;text-align: center"> 404 页面消失</h2>')
    }
}
exports.route = route;