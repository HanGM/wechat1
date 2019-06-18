// var list = require("../../utils/util.js");
Page({
  data: {
    imgUrls: [
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1663731116,1451556006&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1756917507,403325924&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1165154542,2725743669&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3156574253,463654442&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1547779485,2115388568&fm=26&gp=0.jpg'
    ],
    marquee: 0, //初始滚动距离
    speed: 1,   //每次移动X坐标（滚动速度）
    text: '"寻找河南最美的传统村落"大型新闻文化主题活动诚邀您积极参与!'
    // newsList: list.newsList
  },
  onLoad: function() {
    var _this = this;
    var w = wx.getSystemInfoSync().windowWidth;//屏幕宽度
    var len = this.data.text.length * 14;//文字长度
    this.setData({
      windowWidth: w,    
      len: len      
    });
    this.scrolltxt();

    wx.request({
      url: 'http://127.0.0.1:3000/henan/user?action=getNewsList',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _this.setData({
          newsList: res.data.data
        })
      }
    })
  },
  scrolltxt: function() {
    var THIS = this;
    var interval = setInterval(function() {
      if (-THIS.data.marquee < THIS.data.len) {
        THIS.setData({
          marquee: THIS.data.marquee - THIS.data.speed
        });
      }else{
        clearInterval(interval);
        THIS.setData({
          marquee: THIS.data.len
        });
        THIS.scrolltxt();
      }     
    }, 20);
  }
})

