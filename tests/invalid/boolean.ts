//  Dependancies
import { default as validate } from './validate';


/**
 * @description
 *  Boolean parameters for which assertion is performed
 *
 * @returns {boolean[]}
 */
function assertionArguments() : boolean[] {

    return [
        true,
        false
    ];
}

/**
 * @description
 *  Boolean parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
export default function() : void {

    describe('Boolean value/data type', () : void => {

        const info : string = 'from boolean';

        for(const parameter of assertionArguments()) {
            validate(info, parameter);
        }
    });
}
