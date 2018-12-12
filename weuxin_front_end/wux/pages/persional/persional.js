// pages/persional/persional.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: "",
    userName:"",
    parent: "parent",
    teacher: "teacher",
    s: "teacher",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userName: res.userInfo.nickName,
          head: res.userInfo.avatarUrl,
        })
      }
    })
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

  /**
   * 实现家长和老师的转换
   */
  change: function (e) {
    var that = this;
    that.setData({
      s: e.target.dataset.d
    })
  },
  /**
   * 意见反馈跳转
   */
  feedback:function(){
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  
  /**
   * 修改资料
   */
  modData:function(){
    wx.navigateTo({
      url: '../modify_data/modify_data',
    })
  },

  /**
   * 管理员
   */
  administrator:function(){
    wx.navigateTo({
      url: '../administrator/administrator',
    })
  },

  /**
   * 创建班级
   */
  creClass: function () {
    wx.navigateTo({
      url: '../class_creat/class_creat',
    })
  },
  
  //我的班级
  myClass: function () {
    wx.navigateTo({
      url: '../myclass/myclass',
    })
  },
  //增加通知
  addNotice: function () {
    wx.navigateTo({
      url: '../addnotice/addnotice',
    })
  },
  //增加作业
  addWork: function () {
    wx.navigateTo({
      url: '../homework_add/homework_add',
    })
  },
  //修改考勤
  modAtt: function () {
    wx.navigateTo({
      url: '../student_teacher/student_teacher',
    })
  },
  //修改值日
  modTime: function () {
    wx.navigateTo({
      url: '../onduty_teacher/onduty_teacher',
    })
  },
  //修改课程表
  modCurr: function () {
    wx.navigateTo({
      url: '../course_teacher/course_teacher',
    })
  },
  //增加评论
  addComm: function () {
    wx.navigateTo({
      url: '../common/common',
    })
  },
  //上下学时间
  modSchool: function () {
    wx.navigateTo({
      url: '../school_teacher/school_teacher',
    })
  },

})