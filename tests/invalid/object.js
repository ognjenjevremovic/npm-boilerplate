"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  Object parameters for which assertion is performed
 *
 * @returns {Object[]}
 */
function assertionArguments() {
    return [
        {},
        { name: 'Ognjen', age: 23 },
        { some: 'value', falsey: false },
        { num: 0 },
        { exists: 0, defined: undefined, val: null },
        { date: new Date(), year: new Date().getFullYear().toString() }
    ];
}
/**
 * @description
 *  Object parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
function default_1() {
    describe('Object value', function () {
        var info = 'from Object';
        for (var _i = 0, _a = assertionArguments(); _i < _a.length; _i++) {
            var parameter = _a[_i];
            validate_1.default(info, parameter);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=object.js.map