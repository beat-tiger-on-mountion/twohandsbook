var types = ['default', 'primary', 'warn']
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    errMsg:"",
    userInfo:"",
    rawData:""
  },

  onGotUserInfo: function (e) {
    wx.getUserInfo({
     success:function(res){
       console.log(res.userInfo.nickName),
       console.log(res.userInfo.avatarUrl)
     }
    })
    var that = this;
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    that.setData({
      errMsg: e.detail.errMsg,
      userInfo: e.detail.userInfo,
      rawData: e.detail.rawData
    }),
    console.log(this.data.userInfo)
  },
}


Page(pageObject)