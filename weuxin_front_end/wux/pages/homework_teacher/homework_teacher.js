// pages/homework_teacher/homework_teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: "11月14日",
    math: "数学：做完练习题",
    chinese: " 语文：背诵全文",
    english: " 英语：做阅读理解,完形填空,背写单词",
    physical: "物理：做完练习题",
    biological: "生物：做完试卷",
    img:"/images/add.png"

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
  //老师添加作业
  addhomework: function () {
    wx.navigateTo({
      url: '../homework_add/homework_add',
    })
  }
})