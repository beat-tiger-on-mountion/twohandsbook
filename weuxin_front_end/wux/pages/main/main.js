var app = getApp()
// pages/main/main.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    s:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(app.globalData.classId)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    wx.request({
      url: 'http://localhost:8080/weixin/news',
      method: "GET",
      data: {
        a: '1'
      },
      header: {
        //  'content-type':'application/json'
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var a = res.data
        that.setData({
          s: a
        })
        console.log(res.data)
      }
    })
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
  // 活动跳转页面
  actvity: function() {
    wx.navigateTo({
      url: '../activity_list/activity_list',
    })
  },
  // 新闻跳转
  onclick: function(res) {
    app.globalData.newsid=res.currentTarget.dataset.name,
      console.log(app.globalData.newsid)
     wx.navigateTo({
         url: '../News_detail_page/News_detail_page',
       })
  },
  // 通知跳转
  notice: function() {
    wx.navigateTo({
      url: '../notice_teacher/notice_teacher',
    })
  },

  // 上下学签到跳转
  schooltime: function() {
    wx: wx.navigateTo({
      url: '../school_parent/school_parent',
    })
  },
  // 作业跳转
  homework: function() {
    wx.navigateTo({
      url: '../homework_teacher/homework_teacher',
    })
  }

})