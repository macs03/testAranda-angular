import angular from 'angular';

export const ScrollDirective = ($window, $log, $rootScope, $document) => {
  'ngInject';
  return {
    restrict: 'A',
    link($scope) {
      angular.element($window).bind('scroll', () => {
        const el = angular.element($document).find('body');
        const height = el[0].scrollHeight / 1.7;
        if (pageYOffset > height) {
          $rootScope.$broadcast('getMore', true);
        }
        $scope.$apply();
      });
    }
  };
};
