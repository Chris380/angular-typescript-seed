module Test.Services {
    export interface ITestService {
      GetName(): string;
      Add(a: number, b: number): number;
    }

    export class TestService implements ITestService {

        static $inject = ["$filter"];
        constructor(private $filter) {
        }

        public GetName() {
          return this.$filter("UpperCaseFilter")("Hier ist der TestService!");
        }

        public Add(a: number, b: number) {
          return a + b;
        }
    }

    angular
      .module("app.test")
      .service("TestService", TestService);
}
