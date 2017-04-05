//  Dependancies
import { default as validate } from './validate';


/**
 * @description
 *  Instances of Error class parameters for which assertion is performed
 *
 * @returns {Error[]}
 */
function assertionArguments() : Error[] {

    return [
        new Error(),
        new Error('Custom error'),
        new Error('Invalid parameter supplied'),
        new Error('It should not be thrown, thus not stopping the Node process')
    ];
}

/**
 * @description
 *  Instance of Error class parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
export default function() : void {

    describe('Error value/data type', () : void => {

        const info : string = 'from instance of Error class';

        for(const parameter of assertionArguments()) {
            validate(info, parameter);
        }
    });
}
