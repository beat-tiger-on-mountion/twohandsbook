const app = getApp()
import {
  $wuxSelect
} from '../../dist/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: "",
    value1: "",
    nickName: "",
    avatarUrl: "",
    head: "../../images/1.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(app.globalData.nickName)
    // console.log("url")
    // console.log(app.globalData.avatarUrl)

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
  /**
   * 学校选择事件
   */
  onClick1() {
    $wuxSelect('#wux-select1').open({
      value: this.data.value1,
      options: [
        'A小学',
        'B小学',
        'C小学',
        'D小学',
        'E小学',
        'F小学',
      ],
      onConfirm: (value, index, options) => {
        console.log('onConfirm', value, index, options)
        if (index !== -1) {
          this.setData({
            value1: value,
            title1: options[index],
          })
        }
      },
    })
  },
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      error: isTel(e.detail.value),
      value: e.detail.value,
    })
  },
  onFocus(e) {
    this.setData({
      error: isTel(e.detail.value),
    })
    console.log('onFocus', e)
  },
  onBlur(e) {
    this.setData({
      error: isTel(e.detail.value),
    })
    console.log('onBlur', e)
  },
  onConfirm(e) {
    console.log('onConfirm', e)
  },
  onClear(e) {
    console.log('onClear', e)
    this.setData({
      error: true,
      value: '',
    })
  },
  onError() {
    wx.showModal({
      title: 'Please enter 11 digits',
      showCancel: !1,
    })
  },
  /**
   * 获得用户输入框内容 实验结束放弃
   */
  getUserName: function(e) {
    this.setData({
      userName: e.detail.value
    })
  },
  /**
   * 获得用户输入框内容 实验结束放弃
   */
  getPassWord: function(e) {
    this.setData({
      passWord: e.detail.value
    })
  },

  /**
   * 登录验证信息后跳到主页
   */
  login: function() {
    var that = this;
    wx.request({
      url: "http://localhost:8080/weixin/login",
      data: {
        userName: app.globalData.nickName,
        passWord: app.globalData.nickName
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

})