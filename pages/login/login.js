Page({
  data: {
    username: '',
    password: ''
  },
  bindUsernameInput: function(event) {
    this.setData({
      username: event.detail.value
    });
  },
  bindPasswordInput: function(event) {
    this.setData({
      password: event.detail.value
    });
  },
  login: function() {
    if (this.data.username === 'ainipzy' && this.data.password === '1314520') {
      wx.setStorageSync('username', this.data.username)
      wx.switchTab({
        url: '/pages/index/index'
      });
    } else {
      wx.showToast({
        title: '用户名或密码错误',
        icon: 'none',
        duration: 2000
      });
    }
  }
});
