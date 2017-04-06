//  Dependancies
import { default as performArgumentValidation } from './validate';


/**
 * @description
 *  Object parameters for which assertion is performed
 *
 * @returns {Object[]}
 */
function assertionArguments() : object[] {

    return [
        { },
        { name : 'Ognjen', age : 23 },
        { some : 'value', falsey : false },
        { num : 0 },
        { exists : 0, defined : undefined, val : null },
        { date : new Date(), year : new Date().getFullYear().toString() }
    ];
}

/**
 * @description
 *  Object parameter value/data type tests.
 *
 * @export
 */
export default function() : void {

    describe('Object data type value', () : void => {

        const dataTypeOfArgumentSupplied : string = 'Object';

        for(const argumentSuppliedToMethod of assertionArguments()) {
            performArgumentValidation(
                dataTypeOfArgumentSupplied,
                argumentSuppliedToMethod
            );
        }
    });
}
