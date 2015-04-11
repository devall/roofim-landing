'use strict';

angular.module('app', [
  'ngResource',
  'ngMessages',
  'ui.router',
  'ui.bootstrap',
  'ngDropdowns',
  'restangular',
  'ui.mask',
  'ngAnimate',
  'ngFacebook',
  'mgcrea.ngStrap.helpers.dateFormatter',
  'mgcrea.ngStrap.helpers.dimensions',
  'mgcrea.ngStrap.tooltip',
  'mgcrea.ngStrap.helpers.dateParser',
  'mgcrea.ngStrap.datepicker',
  /*
  'app.component.modals',
  'app.component.user',
  'app.component.passwordEqual',
  'app.component.passStrength',
  'app.component.trips',
  'app.component.im',
  'app.component.datepicker',
  'app.component.feedback',*/
  'app.state.root',
  'app.state.home',
  'app.state.roofs',
  /*
  'app.state.search',
  'app.state.profileLayout',
  'app.state.goods',
  'app.state.im',
  'app.state.orders',
  'app.state.favorites',
  'app.state.feedback',
  'app.state.diary',
  'app.state.rating',
  'app.state.trips',
  'app.state.timeline',
  'app.state.settings',
  'app.state.verification',
  'app.state.forgot-password',
  'app.state.facebook',
  'app.state.faq',*/
  'app.state.notFound'


  //'primus'
])
.config(function ($stateProvider,
  $urlRouterProvider,
  $locationProvider,
  datepickerConfig,
  datepickerPopupConfig,
  RestangularProvider

  //primusProvider
  ) {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/not-found');

  datepickerConfig.showWeeks = false;
  datepickerPopupConfig.showButtonBar = false;
  datepickerPopupConfig.closeOnDatSelection = true;

  RestangularProvider.setBaseUrl('/api/1');

  /*
  primusProvider
  // Define Primus options.
  .setOptions({
    reconnect: {
      minDelay: 100,
      maxDelay: 60000,
      retries: 100
    }
  })
  // Define default multiplex option for resources.
  .setDefaultMultiplex(false);
  */

  moment.locale('ru');
}); // End of module config
