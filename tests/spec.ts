//  Tests
import validValues from './valid';
import {
    invalidValues,
    invalidDataTypes
} from './invalid';


/**
 * @description
 *  Perform the batch test for arguments of invalid data types
 *
 * @returns {*}
*/
describe('Invalid parameter data type supplied', invalidDataTypes);

/**
 * @description
 *  Perform the batch test for arguments of invalid values
 *
 * @returns {*}
*/
describe('Invalid parameter value supplied', invalidValues);

/**
 * @description
 *  Perform the batch test for valid valued arguments
 *
 * @returns {*}
*/
describe('Valid parameter value supplied', validValues);
