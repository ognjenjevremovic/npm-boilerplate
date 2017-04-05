//  Dependancies
import { default as validate } from './validate';


/**
 * @description
 *  Number parameters for which assertion is performed
 *
 * @returns {Number[]}
 */
function assertionArguments() : number[] {

    return [
        -600,
        -5.6975,
        -.5000,
        -0.0001,
        0.0525,
        .99999,
        568
    ];
}

/**
 * @description
 *  Number parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
export default function() : void {

    describe('Number value', () : void => {

        const info : string = 'from number';

        for(const parameter of assertionArguments()) {
            validate(info, parameter);
        }
    });
}
