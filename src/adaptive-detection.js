/**
 * angular-adaptive-detection v0.1.1
 * The MIT License
 * Copyright (c) 2013 Jan Antala
 */

(function () {

var adaptive = angular.module('adaptive.detection', []);

adaptive.provider('$detection', [function() {

  this.userAgent = navigator.userAgent;

  this.setUserAgent = function(userAgent) {
    this.userAgent = userAgent;
  };

  this.$get = function() {
    var userAgent = this.userAgent;

    return {
      getUserAgent: function(){
        return userAgent;
      },
      isiOS: function(){
        return (/(iPad|iPhone|iPod)/gi).test(userAgent);
      },
      isAndroid: function(){
        return (/(Android)/gi).test(userAgent);
      }
    };
  };

}]);

})();