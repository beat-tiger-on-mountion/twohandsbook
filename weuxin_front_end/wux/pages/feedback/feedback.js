const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    suggest: '',
    userName: "",
    avatarUrl: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function(res) {
        that.setData({
          userName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(e) {
   
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
   * 将用户反馈写入suggest中
   */
  suggestInput: function(e) {
    this.setData({
      suggest: e.detail.value
    })
  },
  /**
   * 访问backtous
   * 将用户名和反馈意见作为参数传递
   * 判断返回值 无问题提示提交成功 并返回主页
   */
  sub: function(e) {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/weixin/backtous',
      data: {
        userName: app.globalData.userInfo.nickName,
        suggest: that.data.suggest,
      },
      header: {
        'content-type': 'application/x-www-form-urlencodedn',
      },
      success(res) {
        var result = res.data;
        if (result == true) {

          console.log(that.data.suggest)
          wx.switchTab({
              url: '../main/main',
            }),
            wx.showToast({
              title: '提交成功',
              icon: 'succes',
              duration: 1000,
              mask: true
            })
        }
      }
    })
  },


})