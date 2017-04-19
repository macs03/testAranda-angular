class MoviessController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/techs/techs.json')
      .then(response => {
        this.techs = response.data;
      });
  }
}

export const movies = {
  template: require('./movies.html'),
  controller: MoviessController
};
