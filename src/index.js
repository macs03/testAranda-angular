import angular from 'angular';
import 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.min.css';
import 'angular-loading-bar';
import 'angular-loading-bar/build/loading-bar.min.css';

import {
  moviesModule
} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';
import loadingBar from './configLoadingBar';
import toastr from './configToastr';

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

import AppService from './app/service';

import './index.scss';

angular
  .module('app', [moviesModule, 'ui.router'])
  .config(routesConfig)
  .config(loadingBar)
  .config(toastr)
  .component('app', main)
  .component('fountainHeader', header)
  .component('bar', bar)
  .component('fountainFooter', footer)
  .constant('ApiUrl', 'http://www.omdbapi.com/')
  .service('AppService', AppService);
