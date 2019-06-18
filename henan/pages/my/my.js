// pages/my/my.js
var url = getApp().globalData.baseURL
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url,
    pic: '/bg.jpg',
    myList: [{
      id: 0,
      icon: "icon-ziliao",
      title: "我的资料"
    }, {
        id: 1,
        icon: "icon-xing",
        title: "我的收藏"
      }, {
        id: 2,
        icon: "icon-write",
        title: "我的投稿"
      }, {
        id: 3,
        icon: "icon-tuiguang",
        title: "我的推广"
      }, {
        id: 4,
        icon: "icon-tongzhi",
        title: "消息通知"
      }, {
        id: 5,
        icon: "icon-shezhi",
        title: "我的设置"
      }]
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