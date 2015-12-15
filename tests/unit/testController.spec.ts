describe("DemoAppTest", () => {
  var testController: Test.Controllers.ITestController;

  var mockTestService: Test.Services.ITestService = {
    Add: (a, b) => {return a + b; }, GetName: () => {return "MockTestService"; }
  };

  beforeEach(angular.mock.module("app.test"));
  beforeEach(angular.mock.inject(($controller) => {
    testController = $controller("TestController", {
      TestService: mockTestService
    });
  }));

  it("sollte eine Addition im Controller durchführen können", () => {
     testController.a = 3;
     testController.b = 11;
     testController.Calculate();
     expect(testController.result).toBe("Das Ergebnis ist: 14");
   });
});
