/**  新数据结构 */
var guangdongCity = {
  shenzhen: 11,
  guangzhou: 12,
  zhuhai: 13
};

/**老数据结构 */
var getGuangdongCity = function () {
  var guangdongCity = [{
    name: 'shenzhen',
    id: 11,
  }, {
    name: 'guangzhou',
    id: 12,
  }];

  return guangdongCity;
};

/**渲染地图 */
var render = function (fn) {
  console.log('开始渲染广东省地图');
  document.write(JSON.stringify(fn()));
};

/**地图数据的适配器函数 新数据兼容老数据 */
var addressAdapter = function (oldAddressfn) {

  var address = {},
    oldAddress = oldAddressfn();

  for (var i = 0, c; c = oldAddress[i++];) {
    address[c.name] = c.id;
  }

  return function () {
    return address;
  }
};


render(addressAdapter(getGuangdongCity));