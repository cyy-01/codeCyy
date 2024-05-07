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
    if (this.data.username === 'admin' && this.data.password === '123456') {
      wx.navigateTo({
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