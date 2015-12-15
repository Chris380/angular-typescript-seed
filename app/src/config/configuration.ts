angular.module("DemoApp")
  .config(["$compileProvider", ($compileProvider: ng.ICompileProvider) => {
    $compileProvider.debugInfoEnabled(true);
  }]);
