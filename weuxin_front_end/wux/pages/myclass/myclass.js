// pages/myclass/myclass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: "/images/1.png",
    listData: [
      { "type1": "张三三", "type2": "李四四", "type3": "王五五", "type4": "赵六六" },
      { "type1": "李四四", "type2": "张三三", "type3": "赵六六", "type4": "王五五" },
      { "type1": "张三三", "type2": "李四四", "type3": "王五五", "type4": "赵六六" },
      { "type1": "李四四", "type2": "张三三", "type3": "赵六六", "type4": "王五五" },
      { "type1": "张三三", "type2": "李四四", "type3": "王五五", "type4": "赵六六" },
      { "type1": "李四四", "type2": "张三三", "type3": "赵六六", "type4": "王五五" },
      { "type1": "张三三", "type2": "李四四", "type3": "王五五", "type4": "赵六六" },
      { "type1": "李四四", "type2": "张三三", "type3": "赵六六", "type4": "王五五" },
      { "type1": "张三三", "type2": "李四四", "type3": "王五五", "type4": "赵六六" },
      { "type1": "李四四", "type2": "张三三", "type3": "赵六六", "type4": "王五五" },
      { "type1": "张三三", "type2": "李四四", "type3": "王五五", "type4": "赵六六" },
      { "type1": "李四四", "type2": "张三三", "type3": "赵六六", "type4": "王五五" },
      { "type1": "张三三", "type2": "李四四", "type3": "王五五", "type4": "赵六六" },
      { "type1": "李四四", "type2": "张三三", "type3": "赵六六", "type4": "王五五" },
      { "type1": "张三三", "type2": "李四四", "type3": "王五五", "type4": "赵六六" },
      { "type1": "李四四", "type2": "张三三", "type3": "赵六六", "type4": "王五五" },
   
    ],
    grade: '3', 
    classInt:'2',
    s:'',
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
       url: 'http://localhost:8080/weixin/students',
       method:'GET',
       data:{
        //  grade:'3',
        //  classInt:'2'
         grade:this.data.grade,
         classInt:this.data.classInt,
       },
       header:{
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