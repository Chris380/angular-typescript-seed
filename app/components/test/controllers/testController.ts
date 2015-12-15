module Test.Controllers {
  "use strict";

  export interface ITestController {
    a: number;
    b: number;
    name: string;
    result: string;
    Calculate: () => void;
  }

  class TestController implements ITestController {
    a: number;
    b: number;
    name: string;
    result: string;

    static $inject = ["TestService"];
    constructor(private testService: Test.Services.ITestService) {
        this.name = testService.GetName();
    }

    public Calculate = () => {
      this.result = "Das Ergebnis ist: " + this.Add(this.a, this.b);
    };

    private Add(a: number, b: number) {
      return this.testService.Add(a, b);
    };
  }

  angular
    .module("app.test")
    .controller("TestController", TestController);
}
