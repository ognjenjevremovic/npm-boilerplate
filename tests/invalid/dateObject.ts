//  Dependancies
import { default as performArgumentValidation } from './validate';


/**
 * @description
 *  Instances of Date class parameters for which assertion is performed
 *
 * @returns {Date[]}
 */
function assertionArguments() : Date[] {

    return [
        new Date(),
        new Date('04/04/2017'),
        new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
        new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
    ];
}

/**
 * @description
 *  Instance of Date class parameter value/data type tests.
 *
 * @export
 */
export default function() : void {

    describe('Date data type value', () : void => {

        const dataTypeOfArgumentSupplied : string = 'instance of Date class';

        for(const argumentSuppliedToMethod of assertionArguments()) {
            performArgumentValidation(
                dataTypeOfArgumentSupplied,
                argumentSuppliedToMethod
            );
        }
    });
}
