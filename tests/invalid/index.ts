//  Tests
import {
    arrayValue,
    booleanValue,
    errorObjectValue,
    functionValue,
    undefinedValue,
    nullValue,
    numberValue,
    objectValue,
    dateObjectValue,
    stringValue
} from './invalidDataTypes';


/**
 * @description
 *  Tests should pass!
 *
 * @export
 */
export function invalidDataTypes() {
    describe('Value passed is of invalid data type', () => {
        arrayValue();
        booleanValue();
        errorObjectValue();
        functionValue();
        undefinedValue();
        nullValue();
        numberValue();
        objectValue();
        dateObjectValue();
        stringValue();
    });
}

/**
 * @description
 *  Tests should pass!
 *
 * @export
 */
export function invalidValues() {
    describe('Value passed is of invalid value', () => {
        arrayValue();
        booleanValue();
        errorObjectValue();
        functionValue();
        undefinedValue();
        nullValue();
        numberValue();
        objectValue();
        dateObjectValue();
        stringValue();
    });
}
