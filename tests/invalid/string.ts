//  Dependancies
import { default as performArgumentValidation } from './validate';


/**
 * @description
 *  String parameters for which assertion is performed
 *
 * @returns {string[]}
 */
function assertionArguments() : string[] {

    return [
        '',
        '    ',
        'false',
        'string data type',
        'lorem ipsum',
        new Date().toString(),
        '333555',
        'feel free to add some more',
        'that you think could result in',
        'unexpected module behaviour'
    ];
}

/**
 * @description
 *  String parameter value/data type tests.
 *
 * @export
 */
export default function() : void {

    describe('String data type value', () : void => {

        const dataTypeOfArgumentSupplied : string = 'string';

        for(const argumentSuppliedToMethod of assertionArguments()) {
            performArgumentValidation(
                dataTypeOfArgumentSupplied,
                argumentSuppliedToMethod
            );
        }
    });
}
