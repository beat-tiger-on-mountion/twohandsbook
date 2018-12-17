// pages/achool_teacher/school_teacher.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    title1: '8:00',
    value2: '',
    title2: '5:00',
    s: '',
    upschool1 :'7:00', 
    upschool2: '8:00', 
    upschool3: '8:30', 
    downschool1:'4:00', 
    downschool2: '5:00', 
    downschool3: '5:30', 
    
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
      url: 'http://localhost:8080/weixin/schooltimecheck',
      method: 'GET',
      data: {
        a:'1',
        
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

  upschoolinput: function (e) {
    this.setData({
      upschool1: e.detail.value
    })
    console.log(this.data.upschool1)
  },
  upschoolinput2: function (e) {
    this.setData({
      upschool2: e.detail.value
    })
    console.log(this.data.upschool2)
  },
  upschoolinput3: function (e) {
    this.setData({
      upschool3: e.detail.value
    })
    console.log(this.data.upschool3)
  },
  downschoolinput: function (e) {
    this.setData({
      downschool1: e.detail.value
    })
    console.log(this.data.downschool1)
  },
  downschoolinput2: function (e) {
    this.setData({
      downschool2: e.detail.value
    })
    console.log(this.data.downschool2)
  },
  downschoolinput3: function (e) {
    this.setData({
      downschool3: e.detail.value
    })
    console.log(this.data.downschool3)
  },
  // 提交上下学数据到后台
  button:function(e){    
    var that = this
    wx.request({
      url: 'http://localhost:8080/weixin/schooltime',
      method: 'GET',
      data: {
        upschool1: this.data.upschool1,
        upschool2: this.data.upschool2,
        upschool3: this.data.upschool3,
        downschool1:this.data.downschool1,
        downschool2: this.data.downschool2,
        downschool3: this.data.downschool3,
        classId: app.globalData.classId,
        schoolId: app.globalData.schoolId
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