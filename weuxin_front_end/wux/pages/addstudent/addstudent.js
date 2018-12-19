// pages/addstudent/addstudent.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuNum: null,
    hidden: 'hidden',
    stuName: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

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
  num: function(e) {
    console.log(e.detail.value)
    var num = parseInt(e.detail.value)
    this.setData({
      stuNum: num
    })
  },
  confirmNum: function() {
    this.setData({
      hidden: 'show'
    })
  },
  stuName: function(e) {
    var that = this
    var name = e.detail.value
    var oldName = that.data.stuName
    if (oldName.indexOf(name) == -1) {
      this.setData({
        stuName: oldName + " " + name
      })
    }

  },
  confirmCommit: function() {
    var that = this
    wx.request({
      url: 'http://localhost:8080/weixin/saveStudent',
      data: {
        stuNames: that.data.stuName,
        classId:app.globalData.classId ,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "post",
      success: function(res) {
        console.log(res.data)
      }
    })

  },
})