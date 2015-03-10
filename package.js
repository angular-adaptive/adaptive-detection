/**
 * Created by David Yahalomi on 3/9/15.
 */
Package.describe({
  summary: "This module allows you to detect device.",
  version: "0.4.1",
  git: "https://github.com/netanelgilad/meteor-textAngular.git",
  name: "davidyaha:adaptive-detection"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('urigo:angular@0.7.2', 'client');

  api.addFiles('angular-adaptive-detection.min.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('davidyaha:adaptive-detection', 'client');
  //api.addFiles('angular-adaptive:adaptive-detection-tests.js', 'client');
});
