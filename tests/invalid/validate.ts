//  Dependancie
import * as assert from 'assert';

import { default as npmModule } from '../..';


//  What should the module return
const shouldReturn : string = 'Should return an instance of Error class ->';


/**
 * @description
 *  Check if the module returns a new instance of Error class
 *  and does not throw it, thus not stopping the Node process.
 *
 *  This is the test validator for all invalid parameter values/data types.
 *
 * @param {string} info
 * @param {any} value
 * @returns {*}
 */
export default function(
    info    : string,
    value?  : any
) : void {

    it(`${shouldReturn} ${info} value/data type`, () : void => {
        //  Does not throw an error
        assert.doesNotThrow(() => npmModule(value) as Error, Error);
        //  But returns an instance of Error class
        assert.deepEqual(() => npmModule(value) as Error, new Error('error'));
    });
}
