var Home;
(function (Home) {
    "use strict";
    var HomeController = (function () {
        function HomeController() {
            this.name = "Home";
        }
        return HomeController;
    })();
    ;
    angular.module("app.home", [])
        .controller("HomeController", HomeController);
})(Home || (Home = {}));
