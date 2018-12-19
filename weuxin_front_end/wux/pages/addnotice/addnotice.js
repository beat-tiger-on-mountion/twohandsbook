// pages/addnotice/addnotice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    tit: ""
  },

  /**
   * 和后台连接
   */
  onclick: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/weixin_back/notice', //仅为示例，并非真实的接口地址
      data: {
        nTime: { title },
        nBody: { content }
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'post',
      success: function (res) {
        console.log('submit success');
      },
      fail: function (res) {
        console.log('submit fail');
      },
      complete: function (res) {
        console.log('submit complete');
      }
    })
    wx.navigateBack({
      url: '../notice_teacher/notice_teacher',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  }
  ,

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //跳转
  onclick: function () {
    wx.navigateBack({
      url: '../notice_teacher/notice_teacher',
    })
  }
})
