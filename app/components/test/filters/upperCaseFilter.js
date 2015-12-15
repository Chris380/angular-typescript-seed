var Test;
(function (Test) {
    var Filters;
    (function (Filters) {
        function UpperCaseFilter() {
            return function (text) {
                return text.toUpperCase();
            };
        }
        ;
        angular
            .module("app.test")
            .filter("UpperCaseFilter", UpperCaseFilter);
    })(Filters = Test.Filters || (Test.Filters = {}));
})(Test || (Test = {}));
