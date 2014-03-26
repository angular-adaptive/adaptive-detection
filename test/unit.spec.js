
describe('adaptive.detection', function(){
 
  describe('provider functionality', function() {

    var detection;

    beforeEach(module('adaptive.detection', function($detectionProvider) {
      detection = $detectionProvider;
    }));

    it('should be defined', inject(function() {
      expect(detection).toBeDefined();
    }));

    it('should have setUserAgent method', inject(function() {
      expect(detection.setUserAgent).toBeDefined();
      expect(typeof detection.setUserAgent).toBe('function');
    }));

    it('should have $get method', inject(function() {
      expect(detection.$get).toBeDefined();
      expect(typeof detection.$get).toBe('function');
    }));
  });

  describe('provider public methods', function() {

    beforeEach(module('adaptive.detection', function($detectionProvider) {
      $detectionProvider.setUserAgent('angular');
    }));

    it('should be defined', inject(function($detection) {
      expect($detection).toBeDefined();
    }));

    it('should have public methods', inject(function($detection) {
      expect($detection.getUserAgent).toBeDefined();
      expect($detection.isiOS).toBeDefined();
      expect($detection.isAndroid).toBeDefined();

      expect(typeof $detection.getUserAgent).toBe('function');
      expect(typeof $detection.isiOS).toBe('function');
      expect(typeof $detection.isAndroid).toBe('function');
    }));

    it('should detect angular browser', inject(function($detection) {
      expect($detection.getUserAgent()).toEqual('angular');
      expect($detection.isAndroid()).toEqual(false);
      expect($detection.isiOS()).toEqual(false);
    }));
  });

  describe('test Android', function() {

    beforeEach(module('adaptive.detection', function($detectionProvider) {
      $detectionProvider.setUserAgent('Android');
    }));

    it('should detect Android browser', inject(function($detection) {
      expect($detection.isAndroid()).toEqual(true);
      expect($detection.isiOS()).toEqual(false);
      expect($detection.isWindowsPhone()).toEqual(false);
    }));
  });

  describe('test iOS', function() {

    beforeEach(module('adaptive.detection', function($detectionProvider) {
      $detectionProvider.setUserAgent('iPhone');
    }));

    it('should detect iOS browser', inject(function($detection) {
      expect($detection.isAndroid()).toEqual(false);
      expect($detection.isiOS()).toEqual(true);
      expect($detection.isWindowsPhone()).toEqual(false);
    }));
  });

  describe('test Windows Phone', function() {

    beforeEach(module('adaptive.detection', function($detectionProvider) {
      $detectionProvider.setUserAgent('Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)');
    }));

    it('should detect Internet Explorer browser', inject(function($detection) {
      expect($detection.isAndroid()).toEqual(false);
      expect($detection.isiOS()).toEqual(false);
      expect($detection.isWindowsPhone()).toEqual(true);
    }));
  });

});