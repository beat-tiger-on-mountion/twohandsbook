//app.js
App({
  globalData: {
    nickName: "",
    passWord: "",
    avatarUrl: "",
    newsid:"",
    avatarUrl: null,
    status: null,
    schoolId: null,
    classId: null,
    openId: '',
    userName:'',
    nowStatus:null,
  },
  onLaunch: function() {
    var that = this;

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录 获取用户的openId作为唯一标识
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: 'wx2f30b468844af36c',
            secret: 'efdff61c92a48c36b4d45a7ba8ebfd7e',
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          method: 'GET',
          success: function(res) {
            that.globalData.openId = res.data.openid
            
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      }
    })
    // 获取用户的微信名
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.avatarUrl = res.userInfo.avatarUrl
              this.globalData.nickName = res.userInfo.nickName
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    });
    //获取用户的openId唯一标志，保存到globalData中



  },
  /**
   * 保存场景值，判断用户身份
   */
  onShow: function(options) {
    var that = this;
    this.globalData.status = options.scene
    this.globalData.nowStatus = options.scene
    console.log(this.globalData.status)
  },
  onShareAppMessage: function() {


  },

  getOpenIdData: function(callback) {
    console.log("getOpenIdData")
    var that = this
    wx.login({
      success: function(res) {
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: 'wx2f30b468844af36c',
            secret: 'efdff61c92a48c36b4d45a7ba8ebfd7e',
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          method: 'GET',
          success: function(res) {
            that.globalData.openId = res.data.openid
            console.log("getOpenIdData" + that.globalData.openId)
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    });
  }

})