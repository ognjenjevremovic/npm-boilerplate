//  Dependancies
import { default as performArgumentValidation } from './validate';


/**
 * @description
 *  Undefined parameter value/data type tests.
 *
 * @export
 */
export default function() : void {

    describe('Undefined data type value', () : void => {

        const dataTypeOfArgumentSupplied : string = 'undefined';

        performArgumentValidation(dataTypeOfArgumentSupplied);
        performArgumentValidation(
            dataTypeOfArgumentSupplied,
            undefined
        );
    });
}
