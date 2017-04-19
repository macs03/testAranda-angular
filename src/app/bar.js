class BarController {
  constructor($log, AppService, $scope, $rootScope) {
    this.flag = false;
    this.$log = $log;
    this.AppService = AppService;
    this.$rootScope = $rootScope;
    this.page = 1;
    const self = this;
    function getMore(ev, flag) {
      if (flag) {
        $log.log('searching');
        $log.log(self.query);
        $log.log(angular.isUndefined(self.query));
        const queryDefined = (angular.isUndefined(self.query));
        if (queryDefined === true) {
          $log.log('indefinido');
        } else {
          self.page++;
          $log.log(`search page ${self.page}`);
          self.searchMore(self.page);
        }
      }
    }
    $scope.$on('getMore', getMore);
  }
  showSearch() {
    this.flag = !this.flag;
  }
  search() {
    this.page = 1;
    this.$log.log('searching');
    this.AppService.getMovies(this.query, 1)
      .then(data => {
        this.$log.log(data);
        this.$rootScope.$broadcast('getData', data.data);
      })
      .catch(err => {
        this.toastr.error(err);
      });
  }
  searchMore(page) {
    this.$log.log('searching more');
    this.AppService.getMovies(this.query, page)
      .then(data => {
        this.$log.log(data);
        this.$rootScope.$broadcast('getMoreData', data.data);
      })
      .catch(err => {
        this.toastr.error(err);
      });
  }
}

BarController.$inject = ['$log', 'AppService', '$scope', '$rootScope'];

export const bar = {
  template: require('./bar.html'),
  controller: BarController
};
