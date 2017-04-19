class MovieInfoController {
  constructor($location, AppService, $log) {
    const id = $location.path().split('/');
    this.serie = this.movie = false;
    AppService.getMovie(id[2])
      .then(data => {
        $log.log(data);
        this.data = data.data;
        if (data.data.Type === 'series') {
          this.serie = true;
        } else {
          this.movie = true;
        }
      })
      .catch();
  }
}

MovieInfoController.$inject = ['$location', 'AppService', '$log'];

export const movieInfo = {
  template: require('./movieInfo.html'),
  controller: MovieInfoController
};
