"use strict";

module App.Controllers {
  export class AppController {

    public closeLeftNav: () => void;
    public closeRightNav: () => void;
    public toggleRightNav: () => void;
    public toggleLeftNav: () => void;
    public isSelected: (id: string) => boolean;
    public select: (id: string) => void;

    static $inject = ["$router", "$mdSidenav", "$location"];
    constructor(private $router: any, private $mdSidenav: any, private $location: any) {
      $router.config([
        {path: "/", component: "home"},
        {path: "/test", component: "test"}
      ]);

      this.isSelected = (id) => {
        return this.$location.url().replace("/", "") === id;
      };

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
