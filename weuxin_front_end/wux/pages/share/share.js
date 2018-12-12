var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    errMsg: "",
    userInfo: "",
    rawData: "",
    img: "../../images/1.png",
    schoolId: 1,
    classId: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options)
    // app.globalData.schoolId = options[0]
    // app.globalData.classId = options.[1]
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    var that = this;
    if (app.globalData.status == 1089) {
      var status = app.globalData.status
      wx.request({
        url: 'http://localhost:8080/weixin/getUser',
        data: {
          wxName: app.globalData.openId,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        method: "post",
        success: function (res) {
          console.log(res.data)
          app.globalData.schoolId = res.data.school.schoolId,
            app.globalData.classId = res.data.classs.classId,
            app.globalData.status = res.data.status
            console.log(app.globalData.status)
        }
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

  /**
   * 验证用户登录
   */
  login: function() {
    var that = this;
    wx.request({
      url: "http://localhost:8080/weixin/parentlogin",
      data: {
        wxName: app.globalData.openId,
        status: app.globalData.status,
        schoolId: that.data.schoolId,
        classId: that.data.classId,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: "post",
      success:function(res) {
        console.log(res.data)
        if(res.data != null){
          app.globalData.classId = res.data.classId
        wx.switchTab({
          url: '../persional_teacher/persional_teacher',
        })
        }

      }
    })
  },
  /**
   * 用户授权事件
   */
  onGotUserInfo: function(e) {
    var that = this;
    console.log(app.globalData.openId)
    wx.getUserInfo({
      success: function(res) {
        app.globalData.nickName = res.userInfo.nickName
        that.login()
      }
    })
  },
})