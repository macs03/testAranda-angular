class MoviessController {
  /** @ngInject */
  constructor($scope, $log) {
    this.$scope = $scope;
    const self = this;
    this.techs = [];
    function getData(ev, data) {
      $log.log(data);
      self.techs = data.Search;
    }
    $scope.$on('getData', getData);

    function getMoreData(ev, data) {
      $log.log(data);
      angular.forEach(data.Search, value => {
        self.techs.push(value);
      });
    }
    $scope.$on('getMoreData', getMoreData);
  }
}

MoviessController.$inject = ['$scope', '$log'];

export const movies = {
  template: require('./movies.html'),
  controller: MoviessController
};
