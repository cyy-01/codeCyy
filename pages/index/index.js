Page({
  data: {
    name: '崔阳勇---潘自怡',
    allTime: '',
    photo: ''
  },

  // 初始化页面
  onLoad() {
    this.startTimer();
  },

  startTimer() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  },

  updateTime() {
    const startDate = new Date('2023-05-20T20:00:00'); 
    const now = new Date(); 
    const duration = now - startDate; 

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);
    const allTime = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;

    this.setData({
      allTime
    });
  }
});
