var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    errMsg: "",
    userInfo: "",
    rawData: "",
    img: "../../images/1.png",
    userName: null,
    passWord: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 验证用户登录
   */
  login: function() {
    var that = this;
    wx.request({
      url: "http://10.222.185.60:8080/weixin/login",
      data: {
        userName: app.globalData.nickName
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: "post",
      success(res) {
        console.log(res.data)
        if (res.data == true) {
          wx.switchTab({
            url: '../main/main',
          })
        }
      }
    })
  },
  /**
   * 用户授权事件
   */
  onGotUserInfo: function(e) {
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        app.globalData.nickName = res.userInfo.nickName
        that.login()
      }
    })
  },
})