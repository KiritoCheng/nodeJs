/**
 * Created by Kirito on 2016/10/28.
 */

function home() {
    return "<h2 style='text-align: center'>这是主页</h2>" +
        "<a href='/blog'>点击跳转Blog</a><br/>"
}
function blog() {
    return "<h2><a href='/home'>这是blog</a></h2>"
}
exports.home = home;
exports.blog = blog;