Page({

data:{

},

test: function() {
  var that = this;
  wx.request({
    url: 'http://localhost:8080/weixin/test', //仅为示例，并非真实的接口地址
    data: {
      name: 'djhajhlakdj3132',
      pwd: 'pwd',
      first: 1,
      last: 6,
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    method: 'post',
    success(res) {
      var fii = res.data;
      console.log(fii);
      that.setData({
        fin: res.data
      });
    },
    fail: function (res) {
      console.log(res);
    }
  })

},

})