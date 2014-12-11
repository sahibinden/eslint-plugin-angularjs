/**
 * @fileoverview Rule to restrict some injections to AngularJS controllers
 * @author Murat Corlu
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    function report(node, name, injection) {

        context.report(node, "The {{controller}} controller shouldn't inject {{injection}}", {
            controller: name,
            injection: injection
        });
    }

    return {

        CallExpression: function(node) {

            var restrictedInjections = context.options[0];
            var callee = node.callee;

            if (callee.type === "MemberExpression" && callee.property.name === "controller") {
                var firstArgument = node.arguments[1];

                if (firstArgument.type === "FunctionExpression") {
                    for (var i = 0; i < firstArgument.params.length; i++) {
                        if (restrictedInjections.indexOf(firstArgument.params[i].name) > -1) {
                            report(node, node.arguments[0].value, firstArgument.params[i].name);
                        }
                    }
                }
            }
        }
    };

};
