"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  Instances of Error class parameters for which assertion is performed
 *
 * @returns {Error[]}
 */
function assertionArguments() {
    return [
        new Error(),
        new Error('Custom error'),
        new Error('Invalid parameter supplied'),
        new Error('It should not be thrown, thus not stopping the Node process')
    ];
}
/**
 * @description
 *  Instance of Error class parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
function default_1() {
    describe('Error value/data type', function () {
        var info = 'from instance of Error class';
        for (var _i = 0, _a = assertionArguments(); _i < _a.length; _i++) {
            var parameter = _a[_i];
            validate_1.default(info, parameter);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=errorObject.js.map