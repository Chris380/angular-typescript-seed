module Home {
  "use strict";
  class HomeController {
    name: string;

    constructor() {
        this.name = "Home";
      }
  };

  angular.module("app.home", [])
    .controller("HomeController", HomeController);
}
