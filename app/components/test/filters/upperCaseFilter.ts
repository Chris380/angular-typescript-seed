module Test.Filters {
  function UpperCaseFilter() {
    return (text: string) => {
      return text.toUpperCase();
    };
  };

  angular
    .module("app.test")
    .filter("UpperCaseFilter", UpperCaseFilter);
}
