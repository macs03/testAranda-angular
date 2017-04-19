import angular from 'angular';

import {
  moviesModule
} from './app/techs/index';

import 'angular-ui-router';
import 'angular-loading-bar';
import 'angular-loading-bar/build/loading-bar.min.css';
import 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.min.css';
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

import {
  ScrollDirective
} from './app/scroll.directive';

import './index.scss';

angular
  .module('app', [moviesModule, 'ui.router', 'toastr', 'angular-loading-bar'])
  .config(routesConfig)
  .config(loadingBar)
  .config(toastr)
  .component('app', main)
  .component('fountainHeader', header)
  .component('bar', bar)
  .directive('scroll', ScrollDirective)
  .component('fountainFooter', footer)
  .constant('ApiUrl', 'http://www.omdbapi.com/')
  .service('AppService', AppService);
