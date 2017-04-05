//  Dependancies
import { default as validate } from './validate';


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
 * @returns {*}
 */
export default function() : void {

    describe('String value/data type', () : void => {

        const info : string = 'from string';

        for(const parameter of assertionArguments()) {
            validate(info, parameter);
        }
    });
}
