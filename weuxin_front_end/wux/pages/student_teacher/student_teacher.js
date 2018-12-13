Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentDate: "",
    studentName: " ",
    studentDate1: "",
    studentName1: " ",
    inputValue: null,
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
  ondutyteacher: function() {
    wx.navigateTo({
      url: '../onduty_teacher/onduty_teacher',
    })
  },



  courseteacher: function() {
    wx.navigateTo({
      url: '../course_teacher/course_teacher',
    })
  },



  add: function() {
    var that = this;
    this.setData({
      inputValue: ""
    })
    wx.request({
      url: 'http://localhost:8080/weixin/delayteacher',
      data: {
        studentName: that.data.studentName,
        studentDate: that.data.studentDate,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      success(res) {
        var studentName = that.data.studentName;
        var studentDate = that.data.studentDate;
        console.log(res.data);
      },

    })
  },

  add1: function() {
    var that = this;
    this.setData({
      inputValue: ""
    })

    wx.request({
      url: 'http://localhost:8080/weixin/absenceteacher',
      data: {
        studentName1: that.data.studentName1,
        studentDate1: that.data.studentDate1,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      success(res) {
        var studentName1 = that.data.studentName1;
        var studentDate1 = that.data.studentDate1;
        console.log(res.data);
      },

    })
  },

  studentName: function(e) {
    var that = this;
    that.setData({
      studentName: e.detail.value,
    });
    console.log(this.data.studentName)
  },
  studentDate: function(e) {
    var that = this;
    that.setData({
      studentDate: e.detail.value,
    });
  },


  studentName1: function(e) {
    var that = this;
    that.setData({
      studentName1: e.detail.value,
    });
  },
  studentDate1: function(e) {
    var that = this;
    that.setData({
      studentDate1: e.detail.value,
    });
  },
})