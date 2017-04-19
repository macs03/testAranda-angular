class SeasonController {
  constructor(AppService, $location, $log) {
    this.AppService = AppService;
    const id = $location.path().split('/');
    this.id = id[2];
    this.$log = $log;
    this.tab = 0;
    AppService.getMovie(id[2])
      .then(data => {
        $log.log(data);
        this.data = data.data;
        this.seasonsNumbers = [];
        for (let i = 1; i <= this.data.totalSeasons; i++) {
          this.seasonsNumbers.push(i);
        }
        this.getSeasons(1);
      })
      .catch();
  }

  getSeasons(season) {
    this.showDescription = false;
    this.tab = season - 1;
    this.AppService.getSeasons(this.id, season)
      .then(data => {
        this.$log.log(data);
        this.episodes = data.data.Episodes;
      })
      .catch();
  }
  getEpisode(id, idA) {
    this.$log.log(id);
    this.idA = idA;
    this.AppService.getEpisode(id)
      .then(data => {
        this.$log.log(data);
        this.episodeData = data.data;
        this.showDescription = true;
      })
      .catch();
  }
}

SeasonController.$inject = ['AppService', '$location', '$log'];

export const season = {
  template: require('./season.html'),
  controller: SeasonController
};
