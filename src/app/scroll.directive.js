import angular from 'angular';

export const ScrollDirective = ($window, $log, $rootScope, $document) => {
  'ngInject';
  return {
    restrict: 'A',
    link($scope) {
      angular.element($window).bind('scroll', () => {
        const el = angular.element($document).find('movies');
        const height = el[0].scrollHeight / 2;
        if (pageYOffset + 200 > height) {
          $rootScope.$broadcast('getMore', true);
        }
        $scope.$apply();
      });
    }
  };
};
