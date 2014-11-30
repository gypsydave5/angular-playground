describe('GitUserSearchController', function() {
    beforeEach(module('GitUserSearch'));

    var scope, ctrl;

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

    it('displays search results when you search', function() {
        scope.searchTerm = "gypsydave5";
        scope.doSearch();
        scope.$apply(); //forces Angular to resolve all pending promises. Kewl.
        expect(scope.searchResult).toEqual([]);
    });

});