'use strict';
  angular.module('main')
    .constant('st2Config', {
    hosts: [{
      name: 'StackStorm',
      url: 'https://:49101',
      auth: 'https://:49100' 
    }]
  });
