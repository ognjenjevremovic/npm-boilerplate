"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  Undefined parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
function default_1() {
    describe('Undefined value/data type', function () {
        var info = 'from undefined';
        validate_1.default(info);
        validate_1.default(info, undefined);
    });
}
exports.default = default_1;
//# sourceMappingURL=undefined.js.map