//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("eslint"),
    ESLintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest("lib/rules/ng-controller-inject-restrict", {
    valid: [{
        code: "angular.controller('TestCtrl', function ($scope) {})",
        args: [2, ["$http", "$resource"]]
    }],
    invalid: [{
        code: "angular.controller('TestCtrl', function ($scope, $http) {})",
        args: [2, ["$http", "$resource"]],
        errors: [{ message: "The TestCtrl controller shouldn't inject $http"}]
    }, {
        code: "angular.controller('TestCtrl', function ($scope, $resource) {})",
        args: [2, ["$http", "$resource"]],
        errors: [{ message: "The TestCtrl controller shouldn't inject $resource"}]
    }]
});
