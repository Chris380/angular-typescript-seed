var Test;
(function (Test) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var TestController = (function () {
            function TestController(testService) {
                var _this = this;
                this.testService = testService;
                this.Calculate = function () {
                    _this.result = "Das Ergebnis ist: " + _this.Add(_this.a, _this.b);
                };
                this.name = testService.GetName();
            }
            TestController.prototype.Add = function (a, b) {
                return this.testService.Add(a, b);
            };
            ;
            TestController.$inject = ["TestService"];
            return TestController;
        })();
        angular
            .module("app.test")
            .controller("TestController", TestController);
    })(Controllers = Test.Controllers || (Test.Controllers = {}));
})(Test || (Test = {}));
