describe("DemoAppTest", function () {
    var testController;
    var mockTestService = {
        Add: function (a, b) { return a + b; }, GetName: function () { return "MockTestService"; }
    };
    beforeEach(angular.mock.module("app.test"));
    beforeEach(angular.mock.inject(function ($controller) {
        testController = $controller("TestController", {
            TestService: mockTestService
        });
    }));
    it("sollte eine Addition im Controller durchführen können", function () {
        testController.a = 3;
        testController.b = 11;
        testController.Calculate();
        expect(testController.result).toBe("Das Ergebnis ist: 14");
    });
});
