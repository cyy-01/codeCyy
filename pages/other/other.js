Page({
  data: {
    currentDate: new Date().getTime(), 
    showPickerPopup: false,
    selectedDate: '',
    nextDateRange: '',
    zcDate:''
  },

  // 显示日期选择器
  showPicker() {
    this.setData({
      showPickerPopup: true
    });
  },

  // 关闭日期选择器
  closePicker() {
    this.setData({
      showPickerPopup: false
    });
  },

  // 实时更新日期选择器的当前时间
  onInput(event) {
    this.setData({
      currentDate: event.detail
    });
  },

  // 确认选择的日期
  onConfirm(event) {
    const selectedDate = new Date(event.detail);
    const formattedDate = this.formatDate(selectedDate);
    const nextDateRange = this.calculateNextMonthRange(selectedDate);
    const zcDate=this.calculateZcDate(selectedDate)
    this.setData({
      selectedDate: formattedDate,
      nextDateRange: nextDateRange,
      zcDate:zcDate,
      showPickerPopup: false
    });

    wx.showToast({
      title: `选择的日期是：${formattedDate}`,
      icon: 'none'
    });
  },

  // 格式化日期为 "yyyy-mm-dd"
  formatDate(date) {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  },

  calculateZcDate(selectedDate) {
    const zcDate = new Date(selectedDate);
    zcDate.setDate(zcDate.getDate() + 28);
    const formattedZcDate = this.formatDate(zcDate);
    return formattedZcDate;
  },

  calculateNextMonthRange(selectedDate) {
    // 以选定日期为基准，加 28 天
    const centerDate = new Date(selectedDate);
    centerDate.setDate(centerDate.getDate() + 28);
  
    // 计算前后 7 天
    const prevSevenDays = new Date(centerDate);
    prevSevenDays.setDate(prevSevenDays.getDate() - 7);
  
    const nextSevenDays = new Date(centerDate);
    nextSevenDays.setDate(nextSevenDays.getDate() + 7);
  
    const formattedPrev = this.formatDate(prevSevenDays);
    const formattedNext = this.formatDate(nextSevenDays);
  
    return `${formattedPrev} - ${formattedNext}`;
  },
  

  

  // 登出按钮的点击事件
  logOut() {
    wx.showModal({
      title: '确认退出',
      content: '您确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('username');
          wx.showToast({
            title: '已退出登录',
            icon: 'none'
          });

          setTimeout(() => {
            wx.redirectTo({
              url: '/pages/login/login'
            });
          }, 1200);
        } else if (res.cancel) {
          wx.showToast({
            title: '已取消退出',
            icon: 'none'
          });
        }
      }
    });
  }
});
