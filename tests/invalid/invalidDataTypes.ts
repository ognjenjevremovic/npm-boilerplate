//  Dependancies
import invalidParam_returnsError from './validate';


//  null
export function nullValue() {
    describe('null value', () => {
        invalidParam_returnsError('from null value', null);
    });
}

//  undefined
export function undefinedValue() {
    describe('undefined value', () => {
        invalidParam_returnsError('from undefined value');
        invalidParam_returnsError('from undefined value', undefined);
    });
}

//  boolean
export function booleanValue() {
    describe('boolean value', () => {
        invalidParam_returnsError('from boolean value', true);
        invalidParam_returnsError('from boolean value', false);
    });
}

//  number
export function numberValue() {
    describe('number value', () => {
        invalidParam_returnsError('from number value', -30);
        invalidParam_returnsError('from number value', -.75);
        invalidParam_returnsError('from number value', -0.5);
        invalidParam_returnsError('from number value', 0);
        invalidParam_returnsError('from number value', .75);
        invalidParam_returnsError('from number value', 0.99);
        invalidParam_returnsError('from number value', 25);
    });
}

//  string
export function stringValue() {
    describe('string value', () => {
        invalidParam_returnsError('from string value', 'random string');
        invalidParam_returnsError('from string value', 'undefined');
        invalidParam_returnsError('from string value', 'true');
        invalidParam_returnsError('from string value', '{ still: "a string" }');
    });
}

//  function
export function functionValue() {
    describe('Function', () => {
        invalidParam_returnsError('from function', () => { });
        invalidParam_returnsError('from function', () => true);
        invalidParam_returnsError('from function', () => 'this is a function');
    });
}

//  instance of Error class
export function errorObjectValue() {
    describe('instance of Error class', () => {
        invalidParam_returnsError('from Error object', new Error('invalid value'));
    });
}

//  instance of Date class
export function dateObjectValue() {
    describe('instance of Date class', () => {
        invalidParam_returnsError('from Date object', new Date());
        invalidParam_returnsError('from Date object', new Date('04.04.2017'));
    });
}

//  Array
export function arrayValue() {
    describe('Array', () => {
        invalidParam_returnsError('from Array', []);
        invalidParam_returnsError('from Array', [new Date(), new Date(Date.now() + 1000*60*60*24*7)]);
        invalidParam_returnsError('from Array', ['lw', 'tomorrow']);
    });
}

//  Object
export function objectValue() {
    describe('Object', () => {
        invalidParam_returnsError('from Object', { });
        invalidParam_returnsError('from Object', { name: { first: 'Ognjen', last: 'Jevremovic' } });
        invalidParam_returnsError('from Object', { red: 'ff', green:  0, blue:   0 });
        invalidParam_returnsError('from Object', { red:   45, green: 79, blue: 'CC', alpha: 0.25});
    });
}
