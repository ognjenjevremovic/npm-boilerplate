"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  Number parameters for which assertion is performed
 *
 * @returns {Number[]}
 */
function assertionArguments() {
    return [
        -600,
        -5.6975,
        -.5000,
        -0.0001,
        0.0525,
        .99999,
        568
    ];
}
/**
 * @description
 *  Number parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
function default_1() {
    describe('Number value', function () {
        var info = 'from number';
        for (var _i = 0, _a = assertionArguments(); _i < _a.length; _i++) {
            var parameter = _a[_i];
            validate_1.default(info, parameter);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=number.js.map