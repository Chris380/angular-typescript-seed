var Test;
(function (Test) {
    var Services;
    (function (Services) {
        var TestService = (function () {
            function TestService($filter) {
                this.$filter = $filter;
            }
            TestService.prototype.GetName = function () {
                return this.$filter("UpperCaseFilter")("Hier ist der TestService!");
            };
            TestService.prototype.Add = function (a, b) {
                return a + b;
            };
            TestService.$inject = ["$filter"];
            return TestService;
        })();
        Services.TestService = TestService;
        angular
            .module("app.test")
            .service("TestService", TestService);
    })(Services = Test.Services || (Test.Services = {}));
})(Test || (Test = {}));
