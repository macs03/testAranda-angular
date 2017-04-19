class MovieController {
  constructor($log, AppService, $location) {
    this.showMore = false;
    this.$log = $log;
    this.AppService = AppService;
    this.$location = $location;
  }
  action(id) {
    this.AppService.getMovie(id)
      .then(data => {
        if (data.data.Error) {
          this.toastr.error(data.data.Error);
        }
        this.showMore = true;
        const actors = data.data.Actors.split(',');
        const actorsShow = [];
        angular.forEach(actors, value => {
          if (actorsShow.length < 3) {
            actorsShow.push(value);
          }
        });
        this.movieData = {
          rating: data.data.imdbRating,
          actors: actorsShow
        };
      })
      .catch();
  }

  hide() {
    this.showMore = false;
  }

  goToDetail(id) {
    this.$location.path(`/movieDetail/${id}`);
  }

}

MovieController.$inject = ['$log', 'AppService', '$location'];
export const movie = {
  template: require('./movie.html'),
  bindings: {
    movie: '<'
  },
  controller: MovieController
};
