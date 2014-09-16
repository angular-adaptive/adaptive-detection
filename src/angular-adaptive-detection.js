(function () {
'use strict';

/**
 * @ngdoc overview
 * @name adaptive.detection
 *
 * @description
 * The main module which holds everything together.
 */
var adaptive = angular.module('adaptive.detection', []);

/**
 * @ngdoc object
 * @name adaptive.detection.$detectionProvider
 *
 * @description
 * The `$detectionProvider` provides an interface to configure `$detection service for
 * runtime.
 */
adaptive.provider('$detection', [function() {

  this.userAgent = navigator.userAgent;

  /**
   * @ngdoc function
   * @name adaptive.detection.$detectionProvider#setUserAgent
   * @methodOf adaptive.detection.$detectionProvider
   *
   * @description
   * Let's you configure a custom User Agent string during your apps configuration.
   *
   * <pre>
   * var app = angular.module('myApp', ['adaptive.detection']);
   *
   * app.config(['$detectionProvider', function ($detectionProvider) {
   *   // sets custom User Agent
   *   $detectionProvider.setUserAgent('angular browser');
   * }]);
   * </pre>
   *
   * @param {string} Custom User Agent string
   */
  this.setUserAgent = function(userAgent) {
    this.userAgent = userAgent;
  };

  /**
   * @ngdoc object
   * @name adaptive.detection.$detection
   *
   * @description
   * The `$detection` service can be injected anywhere in your app during runtime like
   * every other service. It provides methods to detect wheter a the current client is
   * for example and iOS device or an Android device.
   *
   * You are also able to retreive the current User Agent using this service.
   */
  this.$get = function() {
    var userAgent = this.userAgent;

    return {

      /**
       * @ngdoc function
       * @name adaptive.detection.$detection#getUserAgent
       * @methodOf adaptive.detection.$detection
       *
       * @description
       * Returns the current User Agent which was set with `$detectionProvider.setUserAgent'.
       *
       * @return {string} userAgent
       */
      getUserAgent: function(){
        return userAgent;
      },

      /**
       * @ngdoc function
       * @name adaptive.detection.$detection#isiOS
       * @methodOf adaptive.detection.$detection
       *
       * @description
       * Returns true if current device is an iOS device.
       *
       * @return {bool}
       */
      isiOS: function(){
        return (/(iPad|iPhone|iPod)/gi).test(userAgent);
      },
      /**
       * @ngdoc function
       * @name adaptive.detection.$detection#isAndroid
       * @methodOf adaptive.detection.$detection
       *
       * @description
       * Returns true if current device is an Android device.
       *
       * @return {bool}
       */
      isAndroid: function(){
        return (/(Android)/gi).test(userAgent);
      },
      /**
       * @ngdoc function
       * @name adaptive.detection.$detection#isWindowsPhone
       * @methodOf adaptive.detection.$detection
       *
       * @description
       * Returns true if current device is a Windows Phone device.
       *
       * @return {bool}
       */
      isWindowsPhone: function(){
        return (/(IEMobile)/gi).test(userAgent);
      },
      /**
       * @ngdoc function
       * @name adaptive.detection.$detection#isBB10
       * @methodOf adaptive.detection.$detection
       *
       * @description
       * Returns true if current device is a BlackBerry 10 device.
       *
       * @return {bool}
       */
      isBB10: function(){
        return (/(BB10)/gi).test(userAgent);
      }
    };
  };

}]);

})();
