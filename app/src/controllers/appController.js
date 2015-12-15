"use strict";
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var AppController = (function () {
            function AppController($router, $mdSidenav) {
                var _this = this;
                this.$router = $router;
                this.$mdSidenav = $mdSidenav;
                $router.config([
                    { path: "/", component: "home" },
                    { path: "/test", component: "test" }
                ]);
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
            AppController.$inject = ["$router", "$mdSidenav"];
            return AppController;
        })();
        Controllers.AppController = AppController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
