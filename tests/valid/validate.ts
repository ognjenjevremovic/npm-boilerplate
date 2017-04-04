//  Dependancie
import * as assert from 'assert';

import { default as _ } from '../..';


//  Should return
const shouldReturn : string = 'Should return  ->';


/**
 * @description
 *  Check if the value returned is
 *
 * @param {string} info
 * @param {any} value
 * @param {any} equalityCheck
 * @returns {*}
 */
export default function validParam(
    info            : string,
    value           : any,
    equalityCheck   : any
) : void {
    it(`${shouldReturn} ${info}`, () =>  assert.equal(_(value), equalityCheck));
}
