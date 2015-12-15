"use strict";

module App.Controllers {
  export class AppController {

    public closeLeftNav: () => void;
    public closeRightNav: () => void;
    public toggleRightNav: () => void;
    public toggleLeftNav: () => void;

    static $inject = ["$router", "$mdSidenav"];
    constructor(private $router: any, private $mdSidenav: any) {
      $router.config([
        {path: "/", component: "home"},
        {path: "/test", component: "test"}
      ]);

      this.closeLeftNav = () => {
            this.$mdSidenav("left").close();
          };

      this.closeRightNav = () => {
                this.$mdSidenav("right").close();
              };

      this.toggleLeftNav = () => {
        this.$mdSidenav("left").toggle();
      };

      this.toggleRightNav = () => {
        this.$mdSidenav("right").toggle();
      };
    }
  }
}
