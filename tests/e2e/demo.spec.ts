module Tests {
  "use strict";
  declare var browser: protractor.IBrowser;

  describe("Protractor Demo App", () => {
    it("should have a title", () => {
      browser.get("http://localhost:1337/app");
      expect(browser.getTitle()).toEqual("Christians Node Demo");
      element(by.className("sidebar-toggle")).click();
      browser.sleep(1);
    });
  });
}
