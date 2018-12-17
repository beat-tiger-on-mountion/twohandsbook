// pages/common/common.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=',
    value1: true,
    ceshi: ''

  },
  onChange(field, e) {
    this.setData({
      [field]: e.detail.value
    })

    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  onChange1(e) {
    this.onChange('value1', e)
  },
/* textarea*/

  bindTextAreaBlur: function (e) {
    this.setData({
      ceshi: e.detail.value
    })

  }, 
  bindFormSubmit: function (e) {
    //console.log(e.detail.value.textare)
    this.setData({
      ceshis: this.data.ceshi
    })
    
  },
onclick:function(){
  var that = this;
  wx.request({
    url: 'http://localhost:8080/weixin_back/test', //仅为示例，并非真实的接口地址
    data: {
      
      cBody:{ceshi},
      anonymity:{value1}

    },
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    method: 'post',
    success: function (res) {
       console.log('submit success'); 
       }, 
       fail: function (res) { 
         console.log('submit fail'); 
         },
          complete: function (res) { 
            console.log('submit complete'); 
            }

    })
  wx.navigateBack({
    url: '../comments/comments',
  })
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

  }
  
})