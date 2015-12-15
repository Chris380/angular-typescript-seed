describe("DemoAppTest", () => {
  var testService: Test.Services.ITestService;

  beforeEach(angular.mock.module("app.test"));
  beforeEach(angular.mock.inject(($injector) => {
    testService = $injector.get("TestService");
  }));

  it("sollte eine Addition im Servive durchführen können", () => {
     expect(testService.Add(3, 5)).toBe(8);
   });
});
