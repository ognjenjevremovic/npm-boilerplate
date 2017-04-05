"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  Array parameters for which assertion is performed
 *
 * @returns {Array<Array<any>>}
 */
function assertionArguments() {
    return [
        [],
        [''],
        [['nested', ['like never before']]],
        [0, false, null, undefined],
        [{ name: 'Ognjen' }],
        [new Error('custom'), new Error('error'), new Error('list')],
        [555, true, 'string']
    ];
}
/**
 * @description
 *  Array parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
function default_1() {
    describe('Array value/data type', function () {
        var info = 'from Array';
        for (var _i = 0, _a = assertionArguments(); _i < _a.length; _i++) {
            var parameter = _a[_i];
            validate_1.default(info, parameter);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=array.js.map