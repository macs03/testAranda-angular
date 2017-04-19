class AppService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getCharacters(query) {
    const defered = this.$q.defer();
    const promise = defered.promise;

    this.$http({
        method: 'GET',
        url: ``
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

  getCharactersByName(page, query) {
    const defered = this.$q.defer();
    const promise = defered.promise;

    this.getConfig().then(config => {
      this.$http({
          method: 'GET',
          url: `${config.api_url}characters?${config.ts}&${config.user_key}&${config.hash_key}&limit=10&offset=${page}&nameStartsWith=${query}`
        })
        .then(
          data => {
            defered.resolve(data);
          },
          err => {
            defered.reject(err);
          }
        );
    });

    return promise;
  }

  getComic(comic) {
    const defered = this.$q.defer();
    const promise = defered.promise;

    this.getConfig().then(config => {
      this.$http({
          method: 'GET',
          url: `${comic}?${config.ts}&${config.user_key}&${config.hash_key}`
        })
        .then(
          data => {
            defered.resolve(data);
          },
          err => {
            defered.reject(err);
          }
        );
    });

    return promise;
  }

}

AppService.$inject = ['$http', '$q'];

export default AppService;
