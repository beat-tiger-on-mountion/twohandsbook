// pages/persional/persional.js
import {
  $wuxToast
} from '../../dist/index'
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: "",
    userName: "",
    parent: "parent",
    teacher: "teacher",
    s: "teacher",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      userName:app.globalData.userName
    })
    wx.getUserInfo({
      success: function(res) {
        that.setData({
          head: res.userInfo.avatarUrl,
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    var that = this
   console.log("nowStatus",app.globalData.nowStatus)

   if(app.globalData.status == 1005){
     that.setData({
       s:"teacher"
     })
   }
   if(app.globalData.status == 1008){
     that.setData({
       s:"parent"
     })
   }
    if (app.globalData.nowStatus == 1005) {
      $wuxToast().show({
        type: 'text',
        duration: 1500,
        color: '#fff',
        text: '请创建班级和修改资料',
        success: () => console.log('请创建班级和修改资料')
      })
    }
    if (app.globalData.nowStatus == 1008) {
      $wuxToast().show({
        type: 'text',
        duration: 1500,
        color: '#fff',
        text: '请修改资料',
        success: () => console.log('请修改资料')
      })
    }
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

  /**
   * 实现家长和老师的转换
   */
  change: function(e) {
    var that = this;
    that.setData({
      s: e.target.dataset.d
    })
  },
  /**
   * 意见反馈跳转
   */
  feedback: function() {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },

  /**
   * 修改资料
   */
  modData: function() {
    wx.navigateTo({
      url: '../modify_data/modify_data',
    })
  },

  /**
   * 管理员
   */
  administrator: function() {
    wx.navigateTo({
      url: '../administrator/administrator',
    })
  },

  /**
   * 创建班级
   */
  creClass: function() {
    wx.navigateTo({
      url: '../class_creat/class_creat',
    })
  },

  //我的班级
  myClass: function() {
    wx.navigateTo({
      url: '../myclass/myclass',
    })
  },
  //增加通知
  addNotice: function() {
    wx.navigateTo({
      url: '../addnotice/addnotice',
    })
  },
  //增加作业
  addWork: function() {
    wx.navigateTo({
      url: '../homework_add/homework_add',
    })
  },
  //修改考勤
  modAtt: function() {
    wx.navigateTo({
      url: '../student_teacher/student_teacher',
    })
  },
  //修改值日
  modTime: function() {
    wx.navigateTo({
      url: '../onduty_teacher/onduty_teacher',
    })
  },
  //修改课程表
  modCurr: function() {
    wx.navigateTo({
      url: '../course_teacher/course_teacher',
    })
  },
  //增加评论
  addComm: function() {
    wx.navigateTo({
      url: '../common/common',
    })
  },
  //上下学时间
  modSchool: function() {
    wx.navigateTo({
      url: '../school_teacher/school_teacher',
    })
  },

})