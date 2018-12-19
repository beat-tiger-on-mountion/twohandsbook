// pages/course_teacher/couese_teacher.js




//  const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: "/images/1.png",
    lists:"",
 



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


  formSubmit(e) {
    var that=this;
    this.setData({
      lists :[
          [e.detail.value.i11, e.detail.value.i12, e.detail.value.i13, e.detail.value.i14, e.detail.value.i15] ,
          [e.detail.value.i21, e.detail.value.i22, e.detail.value.i23, e.detail.value.i24, e.detail.value.i25],
          [e.detail.value.i31, e.detail.value.i32, e.detail.value.i33, e.detail.value.i34, e.detail.value.i35],
          [e.detail.value.i41, e.detail.value.i42, e.detail.value.i43, e.detail.value.i44, e.detail.value.i45],
          [e.detail.value.i51, e.detail.value.i52, e.detail.value.i53, e.detail.value.i54, e.detail.value.i55],
          [e.detail.value.i61, e.detail.value.i62, e.detail.value.i63, e.detail.value.i64, e.detail.value.i65],
          [e.detail.value.i71, e.detail.value.i72, e.detail.value.i73, e.detail.value.i74, e.detail.value.i75],
          [e.detail.value.i81, e.detail.value.i82, e.detail.value.i83, e.detail.value.i84, e.detail.value.i85],
      ],

      
    })


  
    wx.request({
      url: 'http://localhost:8080/weixin/courseteacher',
      data: {
        lists: that.data.lists,
          classId:1,
        // classId:app.globalData.classId,
       
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      success(res) {
        var lists = that.data.lists;
        console.log(res.data);
      },

    })


   
      
    
  },


})