define(['require', 'angular'], function(require, angular) {
     
    var module = angular.module('AngularTranslate', ['pascalprecht.translate']);
     
    module.config(
         
        ["$translateProvider", function($translateProvider) {
            $translateProvider.translations('en', {
                TITLE: 'Hello'
            });
            $translateProvider.translations('de', {
                TITLE: 'Hallo'
            });
            $translateProvider.preferredLanguage('en');
        }]);
     
});