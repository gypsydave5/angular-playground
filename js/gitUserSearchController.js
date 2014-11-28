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
            access_token: "4ac1cd911baaff779f56c3d925210cfd1b354a50",
            q: $scope.searchTerm
        });
    };

});
