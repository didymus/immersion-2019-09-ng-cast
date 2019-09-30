describe('search', function() {
  const { expect } = chai;

  let element;
  let scope;
  let youTubeSearchMock;
  let onSearchedSpy;

  beforeEach(module('video-player'));

  beforeEach(module('templates'));
  beforeEach(inject(function($rootScope, $compile, youTube) {
    onSearchedSpy = sinon.spy();
    scope = $rootScope.$new();

    youTubeSearchMock = sinon.spy(function(string, callback) {
      callback(fakeVideoData);
    });

    youTube.search = youTubeSearchMock;

    scope.service = youTube;
    scope.onSearched = onSearchedSpy;


    element = angular.element('<search data-service="service" data-on-searched="onSearched"></search>');
    element = $compile(element)(scope);

    $rootScope.$digest();
  }));

  it('should have a onSearched function on the scope', function() {
    expect(element.isolateScope().$ctrl.onSearched).to.exist;
    expect(element.isolateScope().$ctrl.onSearched).to.be.a('function');
  });

  it('should not use & function binding', function() {
    expect(element.isolateScope().$ctrl.onSearched).to.equal(onSearchedSpy);
  });

  it('should invoke search when button is clicked', function() {
    element.find('button').click();
    expect(youTubeSearchMock.callCount).to.equal(1);
  });

  it('should invoke the onSearched function with the result of the search', function() {
    element.find('button').click();
    expect(element.isolateScope().$ctrl.onSearched.callCount).to.equal(1);
  });


  // ADVANCED CONTENT TEST (REQUIRED)
  xit ('should have access to a search service within the scope', function() {
    expect(element.isolateScope().$ctrl.service).to.exist;
    expect(element.isolateScope().$ctrl.service).to.be.a('object');
  });
});
