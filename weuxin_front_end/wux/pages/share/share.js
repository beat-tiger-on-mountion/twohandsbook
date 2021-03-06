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
  onShow: function(options) {


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
      success: function(res) {
        console.log(res.data)
        if (res.data != null) {
          if ( res.data.name != null) {
            app.globalData.userName = res.data.name
          }else{
            app.globalData.nickName = app.globalData.userName
          }
          app.globalData.schoolId = res.data.school.schoolId
          app.globalData.classId = res.data.classs.classId
          wx.switchTab({
            url: '../persional/persional',
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
    app.globalData.userName = e.detail.userInfo.nickName
    app.globalData.avatarUrl = e.detail.userInfo.avatarUrl
    that.login()
  },
})