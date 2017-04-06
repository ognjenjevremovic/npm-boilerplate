//  Dependancie
import * as assert from 'assert';

import { default as npmModule } from '../..';


//  What should the module return
const moduleShouldReturn : string = 'Should return an instance of Error class from ->';


/**
 * @description
 *  Check if the module returns a new instance of Error class
 *  and does not throw it, thus not stopping the Node process,
 *  when the inappropriate value/data type is passed.
 *
 *  This is the test validator for all invalid parameter values/data types.
 *
 * @export
 * @param {string} dataTypeOfArgumentSupplied
 * @param {*} [parameterValuePassedAsArgument]
 */
export default function(
    dataTypeOfArgumentSupplied      : string,
    parameterValuePassedAsArgument? : any
) : void {

    it(
        `${moduleShouldReturn} ${dataTypeOfArgumentSupplied} value/data type`,
        () : void => {
            assert.doesNotThrow(() => npmModule(parameterValuePassedAsArgument) as Error, Error);
            assert.deepEqual(() => npmModule(parameterValuePassedAsArgument) as Error, new Error('error'));
        }
    );
}
