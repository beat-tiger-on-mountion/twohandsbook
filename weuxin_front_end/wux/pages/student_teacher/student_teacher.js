// pages/student_teacher/student_teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentDate: "",
    studentName:" ",
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
    var that = this;
    wx.request({
      url: 'http://localhost:8080/weixin/delay', //仅为示例，并非真实的接口地址

      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'post',
      success(res) {
        var fii1 = res.data;
        console.log(fii1);
        that.setData({
          fin1: res.data
        });
      },
      fail: function (res) {
        console.log(res);
      }
    }),


      wx.request({
        url: 'http://localhost:8080/weixin/absence', //仅为示例，并非真实的接口地址

        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        method: 'post',
        success(res) {
          var fii = res.data;
          console.log(fii);
          that.setData({
            fin: res.data
          });
        },
        fail: function (res) {
          console.log(res);
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


  },
  ondutyteacher: function () {
    wx.navigateTo({
      url: '../onduty_teacher/onduty_teacher',
    })
  },
  


  courseteacher: function () {
    wx.navigateTo({
      url: '../course_teacher/course_teacher',
    })
  },



add: function() {
    var that = this;
    wx.request({
      // url: 'http://localhost:8080/weixin/login',
      data: {
        studentName: that.data.studentName,
        studentDate:that.data.studentDate,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      success(res) {
        var studentName=that.data.studentName;
        var studentDate=that.data.studentDate;

        console.log(res.data);
      },

    })
  },





  studentName: function (e) {
    var that = this;
    that.setData({
      studentName: e.detail.value,
    });
  },
  studentDate: function (e) {
    var that = this;
    that.setData({
      studentDate: e.detail.value,
    });
  },



})