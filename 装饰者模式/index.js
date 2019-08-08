
Function.prototype.after = function (afterfn) {
  var __self = this;
  return function () {
    var ret = __self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  }
};

var showLogin = function () {
  console.log('打开登录浮层');
}

var log = function () {
  console.log('上报标签为: ' + this.getAttribute('tag'));
}

showLogin = showLogin.after(log); // 打开登录浮层之后上报数据 

/**点击某按钮打开登录浮层后执行统计数据的代码 */
document.getElementById('button').onclick = showLogin;