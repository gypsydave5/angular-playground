githubUserSearch.controller('GitUserSearchController', function($scope) {

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
        console.log("Hello World,");
    };

});
