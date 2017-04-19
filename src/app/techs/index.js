import angular from 'angular';

import {
  movie
} from './movie';
import {
  movies
} from './movies';

export const moviesModule = 'movies';

angular
  .module(moviesModule, [])
  .component('movie', movie)
  .component('movies', movies);
