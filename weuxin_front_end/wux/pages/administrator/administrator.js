import {
  $wuxToast
} from '../../dist/index'
Page({
  data: {
    value1: ['1'],
    teachers: null,
    ids: "",
  },
  onShow: function() {
    var that = this
    wx.request({
      url: 'http://localhost:8080/weixin/getTeachers',
      data: {
        classId: 30,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function(res) {
        console.log(res.data)
        that.setData({
          teachers: res.data
        })
      },
      fail: function(res) {},
    })
  },
  onChange(field, e) {
    var that = this
    const {
      value
    } = e.detail
    const data = this.data[field]
    const index = data.indexOf(value)
    const current = index === -1 ? [...data, value] : data.filter((n) => n !== value)
    this.setData({
      [field]: current,
    })

    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

  },
  onChange1(e) {
    this.onChange('value1', e)
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var a = e.detail.value.a
    console.log(a.join(" "))
    this.setData({
      ids: a.join(" ")
    })
    console.log(this.data.ids)
    wx.request({
      url: 'http://localhost:8080/weixin/updateTeacher',
      data: {
        ids: this.data.ids
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function(res) {

        $wuxToast().show({
          type: 'text',
          duration: 1000,
          color: '#fff',
          text: '添加成功',
          success: function() {
            console.log(res.data)
            wx.switchTab({
              url: '../persional/persional',
            })
          }
        })
      },
      fail: function(res) {
        console.log(res.data)
      },
    })
  },
})