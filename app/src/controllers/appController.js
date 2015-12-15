"use strict";
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var AppController = (function () {
            function AppController($router, $mdSidenav, $location) {
                var _this = this;
                this.$router = $router;
                this.$mdSidenav = $mdSidenav;
                this.$location = $location;
                $router.config([
                    { path: "/", component: "home" },
                    { path: "/test", component: "test" }
                ]);
                this.isSelected = function (id) {
                    return _this.$location.url().replace("/", "") === id;
                };
                this.closeLeftNav = function () {
                    _this.$mdSidenav("left").close();
                };
                this.closeRightNav = function () {
                    _this.$mdSidenav("right").close();
                };
                this.toggleLeftNav = function () {
                    _this.$mdSidenav("left").toggle();
                };
                this.toggleRightNav = function () {
                    _this.$mdSidenav("right").toggle();
                };
            }
            AppController.$inject = ["$router", "$mdSidenav", "$location"];
            return AppController;
        })();
        Controllers.AppController = AppController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
