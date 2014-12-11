"use strict";

module.exports = {
    rules: {
        "ng-controller-inject-restrict": require("./lib/rules/ng-controller-inject-restrict")
    },
    rulesConfig: {
        "ng-controller-inject-restrict": [2, ["$http", "$resource"]]
    }
};
