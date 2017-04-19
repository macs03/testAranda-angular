import angular from 'angular';

import {
  moviesModule
} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {
  main
} from './app/main';
import {
  header
} from './app/header';
import {
  bar
} from './app/bar';
import {
  footer
} from './app/footer';

import './index.scss';

angular
  .module('app', [moviesModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('bar', bar)
  .component('fountainFooter', footer);
