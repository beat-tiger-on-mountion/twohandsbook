// pages/class_creat/class_creat.js
import { $wuxSelect } from '../../dist/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    title1: '1',
    value2: '',
    title2: '1',
    value3: '',
    title3: '语文老师',
    s:'',
  },
  onClick1() {
    $wuxSelect('#wux-select1').open({
      value: this.data.value1,
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
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
    $wuxSelect('#wux-select2').open({
      value: this.data.value2,
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
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
  onClick3() {
    $wuxSelect('#wux-select3').open({
      value: this.data.value3,
      options: [
        '北京市','天津市','上海市','重庆市','河北省','山西省','辽宁省','吉林省','黑龙江省'
      ],
      onConfirm: (value, index, options) => {
        console.log('onConfirm', value, index, options)
        if (index !== -1) {
          this.setData({
            value3: value,
            title3: options[index],
          })
        }
      },
    })
  },
  // 创建班级的点击事件
  qwe:function(e){
    var that=this
    wx.request({
      url: 'http://localhost:8080/weixin/myclass',
      method:"GET",
      data:{
        grade: this.data.title1,
        classint:this.data.title2
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

  }
})