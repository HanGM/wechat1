const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var newsList = [{
  newsId: 0,
  title: '中部建设工作会议召开',
  main: '新闻内容',
  tag: '中部头条',
  createTime: "1天前",
  thumbNum: 0,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 1,
  title: '中部建设政策法规学习工作会',
  main: '新闻内容',
  tag: '政策法规',
  createTime: "1天前",
  thumbNum: 0,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 2,
  title: '中部建设城乡建设工作积极进行中',
  main: '新闻内容',
  tag: '城乡建设',
  createTime: "1天前",
  thumbNum: 10,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 3,
  title: '中部传统村落宣传日',
  main: '新闻内容',
  tag: '传统村落',
  createTime: "1天前",
  thumbNum: 0,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 4,
  title: '中部生活养生专家讲座',
  main: '新闻内容',
  tag: '生活养生',
  createTime: "1天前",
  thumbNum: 0,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 5,
  title: '中部企业风采大型展示会',
  main: '新闻内容',
  tag: '企业风采',
  createTime: "1天前",
  thumbNum: 10,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 6,
  title: '中部住房基金专项工作会议',
  main: '新闻内容',
  tag: '住房基金',
  createTime: "1天前",
  thumbNum: 0,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 7,
  title: '中部房产管理工作会议召开',
  main: '新闻内容',
  tag: '房产管理',
  createTime: "1天前",
  thumbNum: 0,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 8,
  title: '中部开展城市管理宣传日活动',
  main: '新闻内容',
  tag: '城市管理',
  createTime: "1天前",
  thumbNum: 10,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 0,
  title: '中部建设工作会议召开',
  main: '新闻内容',
  tag: '中部头条',
  createTime: "1天前",
  thumbNum: 0,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 9,
  title: '中部城乡规划工作积极进行中',
  main: '新闻内容',
  tag: '城乡规划',
  createTime: "1天前",
  thumbNum: 10,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 10,
  title: '中部建设工作会议召开',
  main: '新闻内容',
  tag: '中部头条',
  createTime: "1天前",
  thumbNum: 0,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 11,
  title: '中部建设城乡建设工作积极进行中',
  main: '新闻内容',
  tag: '城乡建设',
  createTime: "1天前",
  thumbNum: 0,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 9,
  title: '中部城乡规划工作积极进行中',
  main: '新闻内容',
  tag: '城乡规划',
  createTime: "1天前",
  thumbNum: 10,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 5,
  title: '中部企业风采大型展示会',
  main: '新闻内容',
  tag: '企业风采',
  createTime: "1天前",
  thumbNum: 10,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 6,
  title: '中部住房基金专项工作会议',
  main: '新闻内容',
  tag: '住房基金',
  createTime: "1天前",
  thumbNum: 0,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 7,
  title: '中部房产管理工作会议召开',
  main: '新闻内容',
  tag: '房产管理',
  createTime: "1天前",
  thumbNum: 0,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}, {
  newsId: 8,
  title: '中部开展城市管理宣传日活动',
  main: '新闻内容',
  tag: '城市管理',
  createTime: "1天前",
  thumbNum: 10,
  discussNum: 0,
  picPath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374867695,2847029514&fm=26&gp=0.jpg",
}];
module.exports = {
  formatTime: formatTime,
  newsList: newsList
}
