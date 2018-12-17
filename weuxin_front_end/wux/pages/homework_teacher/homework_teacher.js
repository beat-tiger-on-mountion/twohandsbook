//index.js
//获取应用实例
let app = getApp()
Page({
  data: {
    currentTab: 0,
    idx: 0,
    tabArray: ["首页", "学生信息", "评论墙", "个人中心"],

  },
  //事件处理函数

  swichNav: function (e) {
    var that = this;
    that.setData({
      idx: e.target.dataset.ss
    })
    if (this.data.currentTab === e.target.dataset.ss) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.ss
      })
    }
  },

})