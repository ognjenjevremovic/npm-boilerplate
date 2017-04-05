//  Dependancie
import * as assert from 'assert';

import { default as npmModule } from '../..';


//  What should the module return
const shouldReturn : string = 'Should return ->';


/**
 * @description
 *  Check if the module returns a value it should, by spec
 *  and not instance of Error class.
 *
 *  This is the test validator for all valid parameter values.
 *
 * @param {string} info
 * @param {any} value
 * @param {any} equalityCheck
 * @returns {*}
 */
export default function(
    info            : string,
    value           : any,
    equalityCheck   : any
) : void {
    it(`${shouldReturn} ${info} value/data type`, () : void =>  assert.equal(npmModule(value), equalityCheck));
}
