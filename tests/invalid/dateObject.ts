//  Dependancies
import { default as validate } from './validate';


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
 * @returns {*}
 */
export default function() : void {

    describe('Date value/data type', () : void => {

        const info : string = 'from instance of Date class';

        for(const parameter of assertionArguments()) {
            validate(info, parameter);
        }
    });
}
