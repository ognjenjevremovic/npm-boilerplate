//  Dependancies
import { default as performArgumentValidation } from './validate';


/**
 * @description
 *  Null value parameter value/data type test.
 *
 * @export
 */
export default function() : void {

    describe('Null data type value', () : void => {

        const dataTypeOfArgumentSupplied : string = 'null';

        performArgumentValidation(
            dataTypeOfArgumentSupplied,
            null
        );
    });
}
