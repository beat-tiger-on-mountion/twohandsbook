// pages/administrator/administrator.js
import { $wuxSelect } from '../../dist/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1:'张三',
    title1:'张三'

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

  },
  //选择老师
  onclick() {
    $wuxSelect('#wux-select1').open({
      value: this.data.value1,
      options: [
        '张三',
        '李四',
        '王五',
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
//提交跳转
  onclick1: function () {
    wx.switchTab({
      url: '../persional/persional',
    })
  }

})