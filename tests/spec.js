"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Tests
var valid_1 = require("./valid");
var invalid_1 = require("./invalid");
/**
 * @description
 *  Perform the batch test for arguments of invalid data types
 *
 * @returns {*}
*/
describe('Invalid parameter data type supplied', invalid_1.invalidDataTypes);
/**
 * @description
 *  Perform the batch test for arguments of invalid values
 *
 * @returns {*}
*/
describe('Invalid parameter value supplied', invalid_1.invalidValues);
/**
 * @description
 *  Perform the batch test for valid valued arguments
 *
 * @returns {*}
*/
describe('Valid parameter value supplied', valid_1.default);
//# sourceMappingURL=spec.js.map