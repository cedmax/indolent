var indolent = require('./index');

exports.testIndolentNumber = function (test) {
    test.ok(indolent(1) === 1, "a number");
    test.done();
}

exports.testIndolentString = function (test) {
    test.ok(indolent("indolent") === "indolent", "a string");
    test.done();
}

exports.testIndolentObject = function (test) {
    test.ok(JSON.stringify(indolent({ a: 1 })) === JSON.stringify({ a: 1 }), "an object");
    test.done();
}

exports.testIndolentArray = function (test) {
    test.ok(JSON.stringify(indolent([1,2,3])) === JSON.stringify([1,2,3]), "an array");
    test.done();
}