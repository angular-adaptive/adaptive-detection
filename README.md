# adaptive-detection v0.4.1 [![Build Status](https://travis-ci.org/angular-adaptive/adaptive-detection.png?branch=master)](https://travis-ci.org/angular-adaptive/adaptive-detection)

This module allows you to detect iOS, Android, Windows Phone and BlackBerry 10 devices using user agent string

### Demo

Check out http://www.janantala.com/slides/how-to-build-an-open-source-angularjs-module/#/7/4

# Requirements

- AngularJS v 1.2.x+

# Usage

We use [bower](http://twitter.github.com/bower/) for dependency management. Add
```json
"dependencies": {
    "angular-adaptive-detection": "latest"
}
```
To your `bower.json` file. Then run

    bower install

This will copy the angular-adaptive-detection files into your `bower_components` folder, along with its dependencies. Load the script files in your application:
```html
<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="bower_components/angular-adaptive-detection/angular-adaptive-detection.min.js"></script>
```
Add the **adaptive.detection** module as a dependency to your application module:
```js
var myAppModule = angular.module('MyApp', ['adaptive.detection']);
```
and include $detection provider as a dependency to your controller:
```js
angular.module('MyApp').controller('MainCtrl', function ['$scope', '$detection', ($scope, $detection) {

}]);
```
### Configuration

You can configure provider to a custom User Agent string in app configuration.
```js
$detectionProvider.setUserAgent('angular browser');
```
### Public methods

You can detect Android, iOS, Windows Phone and BlackBerry 10 devices using:

    $detection.isAndroid();
    $detection.isiOS();
    $detection.isWindowsPhone();
    $detection.isBB10();

# Contributing

Contributions are welcome. Please make a pull request against canary branch and do not bump versions. Also include tests.

# Testing

We use karma and jshint to ensure the quality of the code. The easiest way to run these checks is to use grunt:

    npm install -g grunt-cli
    npm install
    bower install
    grunt

The karma task will try to open Chrome as a browser in which to run the tests. Make sure this is available or change the configuration in `test/test.config.js` 

# License

The MIT License

Copyright (c) 2014 [Jan Antala](http://www.janantala.com)
