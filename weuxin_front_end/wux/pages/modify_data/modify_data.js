// pages/modify_data/modify_data.js
import {
  $wuxToast
} from '../../dist/index'
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "用户名",
    avatarUrl: "",
    parent: "parent",
    s: "teacher",
    stuName: null,
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
  onShow: function() {
    //提示新建班级修改资料
    console.log(app.globalData.classId)
    console.log("userStatus", app.globalData.status)
    var that = this
    if (app.globalData.status == 1005) {
      that.setData({
        s: "teacher"
      })
    }
    if (app.globalData.status == 1008) {
      console.log()
      that.setData({
        s: "parent"
      })
    }
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
  saveUserName: function(e) {
    var that = this
    console.log(e.detail.value)
    that.setData({
      userName: e.detail.value
    })
  },
  stuName: function(e) {
    var that = this
    console.log("sssName", e.detail.value)
    that.setData({
      stuName: e.detail.value
    })
  },
  //跳转到个人主页
  onclick: function() {
    var that = this
    setTimeout(function() {
      if (that.data.s == "teacher") {
        wx.request({
          url: 'http://localhost:8080/weixin/teacherUpdate',
          data: {
            wxName: app.globalData.openId,
            userName: that.data.userName,
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          success: function(res) {
            console.log(res.data)
            app.globalData.userName = res.data.name
            console.log("res.name", app.globalData.userName)
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      } else {
        wx.request({
          url: 'http://localhost:8080/weixin/parentUpdate',
          data: {
            wxName: app.globalData.openId,
            userName: that.data.userName,
            stuName: that.data.stuName
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          success: function(res) {
            console.log(res.data)
            app.globalData.userName = res.data.name
            console.log("res.name", app.globalData.userName)
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      }
    }, 300)
    $wuxToast().show({
      type: 'text',
      duration: 1500,
      color: '#fff',
      text: '修改资料成功',
      success: function() {
        wx.switchTab({
          url: '../persional/persional',
        })
      }
    })
  },

})