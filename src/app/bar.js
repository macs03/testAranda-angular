class BarController {
  constructor($log, AppService, $scope, $rootScope, $location) {
    this.flag = false;
    this.$log = $log;
    this.AppService = AppService;
    this.$rootScope = $rootScope;
    this.page = 1;
    this.$location = $location;

    if ($location.path() === '/') {
      this.showBack = false;
    } else {
      this.showBack = true;
    }

    if (localStorage.getItem('test-search-redirec')) {
      this.showSearch();
    }

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
    localStorage.removeItem('test-search-redirec', false);
    if (this.$location.path() !== '/') {
      this.$location.path('/');
      localStorage.setItem('test-search-redirec', true);
    }
  }
  search() {
    this.page = 1;
    this.$log.log('searching');
    localStorage.setItem('test-query', this.query);
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

  showPreview() {
    this.page = 1;
    this.$log.log('searching');
    const query = localStorage.getItem('test-query');
    this.AppService.getMovies(query, 1)
      .then(data => {
        this.$log.log(data);
        this.$rootScope.$broadcast('getData', data.data);
      })
      .catch(err => {
        this.toastr.error(err);
      });
  }

}

BarController.$inject = ['$log', 'AppService', '$scope', '$rootScope', '$location'];

export const bar = {
  template: require('./bar.html'),
  controller: BarController
};
