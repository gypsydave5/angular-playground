describe('GitUserSearchController', function() {
    beforeEach(module('GitUserSearch'));

    var scope, ctrl, httpBackend;

    var gitToken = '4ac1cd911baaff779f56c3d925210cfd1b354a50'

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('GitUserSearchController', {
            $scope: scope
        });
    }));


    it('should initialse with empty search result and term', function() {
        expect(scope.searchResult).toBeUndefined();
        expect(scope.searchTerm).toBeUndefined();
    });

    describe('when searching for a user', function() {

        beforeEach(inject(function($httpBackend) {
            httpBackend = $httpBackend
            httpBackend
            .when("GET", 'https://api.github.com/search/users?access_token=4ac1cd911baaff779f56c3d925210cfd1b354a50&q=gypsydave5' )
            .respond({
                items: []
            });
        }));

        it('displays search results when you search', function() {
            scope.searchTerm = "gypsydave5";
            scope.doSearch();
            scope.$apply(); //forces Angular to resolve all pending promises. Kewl. Apart from HTTP requests. Lame
            httpBackend.flush(); //this resolves the HTTP requests.
            expect(scope.searchResult.items).toEqual([]);
        });

    });

});