"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancie
var assert = require("assert");
var __1 = require("../..");
//  What should the module return
var shouldReturn = 'Should return an instance of Error class ->';
/**
 * @description
 *  Check if the module returns a new instance of Error class
 *  and does not throw it, thus not stopping the Node process.
 *
 *  This is the test validator for all invalid parameter values/data types.
 *
 * @param {string} info
 * @param {any} value
 * @returns {*}
 */
function default_1(info, value) {
    it(shouldReturn + " " + info + " value/data type", function () {
        //  Does not throw an error
        assert.doesNotThrow(function () { return __1.default(value); }, Error);
        //  But returns an instance of Error class
        assert.deepEqual(function () { return __1.default(value); }, new Error('error'));
    });
}
exports.default = default_1;
//# sourceMappingURL=validate.js.map