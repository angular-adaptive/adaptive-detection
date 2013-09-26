
describe('adaptive.detection', function(){
 
  var detection;

  beforeEach(module('adaptive.detection', function($detectionProvider) {
      detection = $detectionProvider;
  }));
 
  it('should allow to set custom userAgent', inject(function() {
    detection.setUserAgent('angular');
    expect(detection.userAgent).toEqual('angular');
    expect(detection.$get().getUserAgent()).toEqual('angular');
  }));

  it('should detect iOS', inject(function() {
    detection.setUserAgent('iPhone');
    expect(detection.$get().isiOS()).toEqual(true);
  }));

  it('should detect Android', inject(function() {
    detection.setUserAgent('Android');
    expect(detection.$get().isAndroid()).toEqual(true);
  }));
  
});