class BarController {
  constructor($log) {
    this.flag = false;
    this.$log = $log;
  }
  showSearch() {
    this.flag = !this.flag;
  }
  search() {
    this.$log.log('searching');
  }
}

BarController.$inject = ['$log'];

export const bar = {
  template: require('./bar.html'),
  controller: BarController
};
