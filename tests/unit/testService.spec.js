describe("DemoAppTest", function () {
    var testService;
    beforeEach(angular.mock.module("app.test"));
    beforeEach(angular.mock.inject(function ($injector) {
        testService = $injector.get("TestService");
    }));
    it("sollte eine Addition im Servive durchführen können", function () {
        expect(testService.Add(3, 5)).toBe(8);
    });
});
