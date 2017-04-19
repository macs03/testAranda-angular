class MovieController {
  constructor($log, AppService) {
    this.showMore = false;
    this.$log = $log;
    this.AppService = AppService;
  }
  action(id) {
    this.AppService.getMovie(id)
      .then(data => {
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

}

MovieController.$inject = ['$log', 'AppService'];
export const movie = {
  template: require('./movie.html'),
  bindings: {
    movie: '<'
  },
  controller: MovieController
};
