# adaptive-detection v0.1.0 [![Build Status](https://travis-ci.org/angular-adaptive/adaptive-detection.png?branch=master)](https://travis-ci.org/angular-adaptive/adaptive-detection)

This module allows you to detect iOS and Android devices using user agent string

# Requirements

- AngularJS v 1.0+

# Usage

We use [bower](http://twitter.github.com/bower/) for dependency management. Add

    dependencies: {
        "angular-adaptive-detection": "latest"
    }

To your `bower.json` file. Then run

    bower install

This will copy the angular-isbn files into your `bower_components` folder, along with its dependencies. Load the script files in your application:

    <script type="text/javascript" src="components/angular/angular.js"></script>
    <script type="text/javascript" src="components/angular-adaptive-detection/src/adaptive-detection.js"></script>

Add the **adaptive.detection** module as a dependency to your application module:

    var myAppModule = angular.module('MyApp', ['adaptive.detection']);

and include $detection provider as a dependency to your controller:

    angular.module('MyApp').controller('MainCtrl', function ['$scope', '$detection', ($scope, $detection) {

    }]);

### Configuration

You can configure provider to a custom User Agent string in app configuration.

    $detection.setUserAgent('angular browser');

### Public methods

You can detect Android and iOS devices using:

    $detection.isAndroid();
    $detection.isiOS();

    
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

Copyright (c) 2013 Jan Antala, https://github.com/janantala
