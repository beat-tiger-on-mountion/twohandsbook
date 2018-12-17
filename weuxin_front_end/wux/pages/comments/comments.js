// pages/comments/comments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '/images/loop3.jpg',
    nickname:"wang",
    date1:"",
    s: '',
  },

  image: {
    src: "/images/loop3.jpg",
    width: 200,
    heigth: 200
  },
  onShow: function () {
    var that = this
    wx.request({
      url: 'http://localhost:8080/weixin/comments',
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  date:function(){
    var mydate = new Date();
    return (mydate.getMonth() + "/" + mydate.getDate() ); 
    

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
    var that=this;
    that.setData({
      date1: this.date(),
     

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
  onclick:function(){
  
    wx.navigateTo({
      url: '../common/common',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})