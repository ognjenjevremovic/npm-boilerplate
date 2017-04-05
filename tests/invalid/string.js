"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  String parameters for which assertion is performed
 *
 * @returns {string[]}
 */
function assertionArguments() {
    return [
        '',
        '    ',
        'false',
        'string data type',
        'lorem ipsum',
        new Date().toString(),
        '333555',
        'feel free to add some more',
        'that you think could result in',
        'unexpected module behaviour'
    ];
}
/**
 * @description
 *  String parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
function default_1() {
    describe('String value/data type', function () {
        var info = 'from string';
        for (var _i = 0, _a = assertionArguments(); _i < _a.length; _i++) {
            var parameter = _a[_i];
            validate_1.default(info, parameter);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=string.js.map