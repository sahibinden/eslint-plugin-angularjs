# ng-controller-inject-restrict

Rule to restrict some injections to AngularJS controllers

## Rule Details

The following patterns are considered warnings:

```js

angular.module('SomeModule').controller('TestCtrl', function ($scope, $http) {
    // something
});

```

The following patterns are not warnings:

```js

angular.module('SomeModule').controller('TestCtrl', function ($scope) {
    // something
});

```

## When Not To Use It

If you want to use all kind of services inside your AngularJS controllers you can disable this rule.

## Further Reading

[AngularJS Documentation](https://docs.angularjs.org/guide/controller#using-controllers-correctly)
