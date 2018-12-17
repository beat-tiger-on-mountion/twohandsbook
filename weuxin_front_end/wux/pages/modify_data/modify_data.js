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
    username: ""

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
    console.log(app.globalData.status)

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
  //跳转到个人主页
  onclick: function() {
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
  }
})