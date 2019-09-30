describe('app', function() {
  const { expect } = chai;

  let element;
  let youTubeSpy;

  beforeEach(module('video-player'));

  beforeEach(module('templates'));

  beforeEach(inject(function($rootScope, $compile, youTube) {
    const scope = $rootScope.$new();

    // We're stubbing out the youTube search function so it doesn't
    // make an http request
    youTube.search = function(str, callback) {
      callback(fakeVideoData);
    };

    youTubeSpy = sinon.spy(youTube, 'search');

    element = angular.element('<app></app>');
    element = $compile(element)(scope);

    $rootScope.$digest();
  }));

  it('should have a selectVideo function on the scope', function() {
    expect(element.isolateScope().$ctrl.selectVideo).to.exist;
    expect(element.isolateScope().$ctrl.selectVideo).to.be.a('function');
  });

  it('should have a onSearched function on the scope', function() {
    expect(element.isolateScope().$ctrl.onSearched).to.exist;
    expect(element.isolateScope().$ctrl.onSearched).to.be.a('function');
  });

  it('should have a currentVideo property on the scope', function() {
    expect(element.isolateScope().$ctrl.currentVideo).to.exist;
    expect(element.isolateScope().$ctrl.currentVideo).to.be.a('object');
  });

  it('should have a videos property on the scope', function() {
    expect(element.isolateScope().$ctrl.videos).to.exist;
    expect(element.isolateScope().$ctrl.videos).to.be.a('array');
  });

  it('should render a video player element, a search element, and a video list element', function() {
    const player = element.find('.video-player iframe');
    const list = element.find('ul.video-list');
    const search = element.find('.search-bar input');

    expect(player.length).to.equal(1);
    expect(list.length).to.equal(1);
    expect(search.length).to.equal(1);
  });

  it('should search youTube when the app is initialized', function() {
    expect(youTubeSpy.callCount).to.equal(1);
  });

  it('should load live data when the app is initialized', function() {
    expect(element.isolateScope().$ctrl.videos).to.equal(fakeVideoData);
    expect(element.isolateScope().$ctrl.currentVideo).to.equal(fakeVideoData[0]);
  });
});