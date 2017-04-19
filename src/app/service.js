class AppService {
  constructor($http, $q, ApiUrl) {
    this.$http = $http;
    this.$q = $q;
    this.ApiUrl = ApiUrl;
  }

  getMovies(query, page) {
    const defered = this.$q.defer();
    const promise = defered.promise;

    this.$http({
      method: 'GET',
      url: `${this.ApiUrl}?s=${query}&page=${page}`
    })
      .then(
      data => {
        defered.resolve(data);
      },
      err => {
        defered.reject(err);
      }
      );

    return promise;
  }

}

AppService.$inject = ['$http', '$q', 'ApiUrl'];

export default AppService;
