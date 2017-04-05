//  Tests
import { default as arrayParameter } from './array';
import { default as booleanParameter } from './boolean';
import { default as dateObjectParameter } from './dateObject';
import { default as errorObjectParameter } from './errorObject';
import { default as functionParameter } from './function';
import { default as nullParameter } from './null';
import { default as numberParameter } from './number';
import { default as objectParameter } from './object';
import { default as stringParameter } from './string';
import { default as undefinedParameter } from './undefined';


/**
 * @description
 *  Batch test for the invalid data type parameter value supplied.
 *  Tests should pass!
 *
 * @export
 */
export function invalidDataTypes() : void {

    describe('Parameter passed is of invalid data type', () : void => {
        /* * * * * * * * * * * * * * * * * * * *
         *  Invalid data type parameter tests  *
         *              goes here              *
         * * * * * * * * * * * * * * * * * * * */
    });
}

/**
 * @description
 *  Batch test for the invalid parameter value supplied.
 *  Tests should pass!
 *
 * @export
 */
export function invalidValues() : void {

    describe('Parameter passed is of invalid value', () : void => {
        /* * * * * * * * * * * * * * * * * *
         *  Invalid value parameter tests  *
         *            goes here            *
         * * * * * * * * * * * * * * * * * */
    });
}
