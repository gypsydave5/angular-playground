githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

    searchResource = $resource('https://api.github.com/search/users');

    //$scope.searchResult = {}

    $scope.doSearch = function() {
        $scope.searchResult = searchResource.get({
            access_token: "4ac1cd911baaff779f56c3d925210cfd1b354a50",
            q: $scope.searchTerm
        });
    };

});
