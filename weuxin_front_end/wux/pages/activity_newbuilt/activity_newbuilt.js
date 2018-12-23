// pages/activity_newbuilt/activity_newbuilt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     title:'',
     tx:''
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
     var that=this
     wx.request({
       url: '',
       method:'GET',
       data:{
         title:this.data.title,
         text:this.data.tx
       },
       header: {
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
  // 标题获取
  titlename:function(e){
    var that=this
    that.setData({
      title:e.data.title
    })
  },

  // 内容获取
  text: function (e) {
    var that = this
    that.setData({
      tx: e.data.tx
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
  activitylist:function(){
    wx.redirectTo({
      url: '../',
      // 这的跳转路径还没有写
    })
  },
})