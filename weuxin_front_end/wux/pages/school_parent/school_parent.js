// pages/achool_parent/school_parent.js
import { $wuxSelect } from '../../dist/index'
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s: '',
    value1: '',
    upschool: '8:00',
    value2: '',
    value3: '',
    title1: '上学时间',
    title2: '下学时间',
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
    var that = this
    wx.request({
      url: 'http://localhost:8080/weixin/timecheck',
      method: 'GET',
      data: {
        a: '1',
        classId: 1,
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

  onClick1() {
    var that = this

    $wuxSelect('#wux-select1').open({

      value: this.data.value1,
      options: [
        that.data.s[0].go,
        that.data.s[1].go,
        that.data.s[2].go,
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
  onClick2() {
    var that = this

    $wuxSelect('#wux-select2').open({

      value: this.data.value2,
      options: [
        that.data.s[0].back,
        that.data.s[1].back,
        that.data.s[2].back,
      ],
      onConfirm: (value, index, options) => {
        console.log('onConfirm', value, index, options)
        if (index !== -1) {
          this.setData({
            value2: value,
            title2: options[index],
          })
        }
      },
    })
  },
  button: function (e) {
    var that = this
    console.log(app.globalData.classId)
    wx.request({
      url: 'http://localhost:8080/weixin/schooltime',
      method: 'GET',
      data: {
        upschool: this.data.title1,
        downschool: this.data.title2,
        classId: 1,
        // classId: app.globalData.classId,
        // schoolId: app.globalData.schoolId
      },
      header: {
        //  'content-type':'application/json'
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var a = res.data
        that.setData({
          s: a,
        })
        console.log(res.data)
      }
    })
  },
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

  }
})