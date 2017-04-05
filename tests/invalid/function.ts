//  Dependancies
import { default as validate } from './validate';


/**
 * @description
 *  Function parameters for which assertion is performed
 *
 * @returns {Function[]}
 */
function assertionArguments() : Function[] {

    return [
        () : void => { },
        () : Error => new Error('It should not be thrown, thus not stopping the Node process'),
        () : number => 5000,
        (param : any) : void => console.log(param)
    ];
}

/**
 * @description
 *  Function parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
export default function() : void {

    describe('Function value', () : void => {

        const info : string = 'from function';

        for(const parameter of assertionArguments()) {
            validate(info, parameter);
        }
    });
}
