'use strict'

var angular=require('angular');
require('angular-route');

var app=angular.module('merafilm',['ngRoute']);
require('./controller');

app.config(function($routeProvider,$locationProvider)
{
  	$locationProvider.hashPrefix('');
  $routeProvider.when('/',{
    templateUrl:'views/home.html',
    controller: 'HomeController'
  })
  .when('/home',{
    templateUrl:'views/home.html',
    controller: 'HomeController'
  });
  
});
