angular.module("DemoApp")
    .config(["$compileProvider", function ($compileProvider) {
        $compileProvider.debugInfoEnabled(true);
    }]);
