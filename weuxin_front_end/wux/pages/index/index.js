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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示 全局变量 添加学校班级 修改状态码表示身份
   */
  onShow: function(options) {
    var that = this;
    if (app.globalData.status == 1089) {
      setTimeout(function() {
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
          success: function(res) {
            app.globalData.schoolId = res.data.school.schoolId,
              app.globalData.classId = res.data.classs.classId,
              app.globalData.status = res.data.status
              wx.switchTab({
                url: '../persional/persional',
              })
          }
        })
      },500)
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
    var that = this;
    var schoolId = app.globalData.schoolId
    var classId = app.globalData.classId
    var msg = [schoolId, classId]
    var smsg = msg.join(",")
    return {
      title: '弹出分享时显示的分享标题',
      desc: '分享页面的内容',
      path: '/pages/share/share?msg=' + smsg, // 路径，传递参数到指定页面。
      success: function(res) {
        console.log("yes", res)

      }
    }
  },

  /**
   * 教师第一次登陆，保存用户名场景值
   */
  login: function() {
    var that = this;
    wx.request({
      url: "http://localhost:8080/weixin/teacherlogin",
      data: {
        wxName: app.globalData.openId,
        status: app.globalData.status
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: "post",
      success(res) {
        console.log(res.data.status)
        if (res.data != null) {
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
    wx.getUserInfo({
      success: function(res) {
        app.globalData.nickName = res.userInfo.nickName
        app.globalData.avatarUrl = res.userInfo.avatarUrl
        that.login()
      }
    })
  },

})
/**
 * 也不知道是什么
 */
function getUserId(data) {
  wx.getStorage({
    key: getUserKey(), //'userInfo',
    fail: function(res) {
      data.back(false);
      //    return false;
    },
    success: function(res) {
      var userData = res.data;
      console.log(userData);
      data.back(userData.usrid);
      // return userData.usrid;
    }
  });
}