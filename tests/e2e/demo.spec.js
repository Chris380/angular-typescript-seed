var Tests;
(function (Tests) {
    "use strict";
    describe("Protractor Demo App", function () {
        it("should have a title", function () {
            browser.get("http://localhost:1337/app");
            expect(browser.getTitle()).toEqual("Christians Angular / Angular Material / Typescript");
        });
    });
})(Tests || (Tests = {}));
