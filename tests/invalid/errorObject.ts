//  Dependancies
import { default as performArgumentValidation } from './validate';


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
 */
export default function() : void {

    describe('Error data type value', () : void => {

        const dataTypeOfArgumentSupplied : string = 'instance of Error class';

        for(const argumentSuppliedToMethod of assertionArguments()) {
            performArgumentValidation(
                dataTypeOfArgumentSupplied,
                argumentSuppliedToMethod
            );
        }
    });
}
