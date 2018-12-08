var app = getApp()
var types = ['default', 'primary', 'warn']
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    errMsg: "",
    userInfo: "",
    rawData: ""
  },

  onGotUserInfo: function(e) {
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        that.setData({
          errMsg: e.detail.errMsg,
          userInfo: e.detail.userInfo,
          rawData: e.detail.rawData
        })
      }
    })
  },
  login: function() {
    wx.navigateTo({
      url: '../login/login',
    })
  },
}


Page(pageObject)