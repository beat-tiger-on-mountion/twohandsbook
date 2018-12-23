// pages/activity_list/activity_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     s:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
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
      url: 'http://localhost:8080/weixin/activity',
      method: "GET",
      data: {
        a: '1'
      },
      header: {
        //  'content-type':'application/json'
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var a = res.data
        that.setData({
          s: a
        })
        console.log(res.data)
      }
    })
  },
  // 页面跳转
  jump:function(){
    wx.navigateTo({
      url: '../activity_detail/activity_detail'
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