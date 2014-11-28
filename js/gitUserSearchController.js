githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

    searchResource = $resource('https://api.github.com/search/users');

    $scope.searchResult = {
        "items": [{
            "login": "antonydenyer",
            "avatar_url": "https://avatars.githubusercontent.com/u/469160?v=3",
            "html_url": "https://github.com/antonydenyer",
        }, {
            "login": "tansaku",
            "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
            "html_url": "https://github.com/tansaku",
        }, {
            "login": "stephenlloyd",
            "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
            "html_url": "https://github.com/stephenlloyd",
        }]
    }

    $scope.doSearch = function() {
        $scope.searchResult = searchResource.get({
            q: $scope.searchTerm
        });
        $scope.searchTerm = "";
    };

});
