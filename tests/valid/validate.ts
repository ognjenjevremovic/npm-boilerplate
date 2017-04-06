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
 * @export
 * @param {string} dataTypeOfArgumentSupplied
 * @param {*} moduleReturnValueShouldBe
 * @param {*} [valuePassedAsParameterToTheModule]
 */
export default function(
    dataTypeOfArgumentSupplied          : string,
    moduleReturnValueShouldBe           : any,
    valuePassedAsParameterToTheModule?  : any
) : void {

    it(`
        ${shouldReturn} ${dataTypeOfArgumentSupplied} value/data type`,
        () : void => assert.equal(npmModule(valuePassedAsParameterToTheModule), moduleReturnValueShouldBe)
    );
}
