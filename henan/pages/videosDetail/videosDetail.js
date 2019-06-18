// pages/videosDetail/videosDetail.js
const baseURL = getApp().globalData.baseURL
Page({
  /**
   * 页面的初始数据
   */
  data: {
    url: baseURL
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    wx.request({
      url: 'http://127.0.0.1:3000/henan/user?action=getFilmsList',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _this.setData({
          videos: res.data.data.filter(v=>v.filmsId == options.id)[0]
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.createVideoContext("myVideo")
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
