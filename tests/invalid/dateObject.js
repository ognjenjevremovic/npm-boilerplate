"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  Instances of Date class parameters for which assertion is performed
 *
 * @returns {Date[]}
 */
function assertionArguments() {
    return [
        new Date(),
        new Date('04/04/2017'),
        new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
        new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
    ];
}
/**
 * @description
 *  Instance of Date class parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
function default_1() {
    describe('Date value/data type', function () {
        var info = 'from instance of Date class';
        for (var _i = 0, _a = assertionArguments(); _i < _a.length; _i++) {
            var parameter = _a[_i];
            validate_1.default(info, parameter);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=dateObject.js.map