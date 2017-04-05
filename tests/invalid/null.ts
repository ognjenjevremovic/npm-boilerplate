//  Dependancies
import { default as validate } from './validate';


/**
 * @description
 *  Null value parameter value/data type test.
 *
 * @export
 * @returns {*}
 */
export default function() : void {

    describe('Null value/data type', () : void => {

        const info : string = 'from null';

        validate(info, null);
    });
}
