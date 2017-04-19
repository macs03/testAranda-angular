import angular from 'angular';

import {
  movieInfo
} from './movieInfo';
import {
  season
} from './season';

export const movieDetailModule = 'movieInfo';

angular
  .module(movieDetailModule, [])
  .component('movieInfo', movieInfo)
  .component('season', season);
