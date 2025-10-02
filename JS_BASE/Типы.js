/* Primitive data types 
String
Number
Boolean
Null
Undefiend
Symbols(ES6 2015)

Reference data types
Array
Object Literal
Function
Date 
Anything esle..
*/

let x = 'something';
console.log(x);
x = 3;
console.log(x);//динамическая типизация (TypeScript статическая типизация)

//Primitive data types 
// String
const someText = 'Some text';
console.log(typeof someText);

//Number
const someNumber = 11 ;
console.log(typeof someNumber);

//Boolean
const someBoolean = true;
console.log(typeof someBoolean);

//Null
const someNull = null;
console.log(typeof someNull);//? object(надо почитать про эту ошибку)

// Undefiend 
let someUndefiend;
console.log(typeof someUndefiend);

// Symbol
const someSymbol = Symbol();
console.log(typeof someSymbol);

//Reference data types
// Array
const someArray =[1, 2, 3, 4];
console.log(typeof someArray);

// Object Litearl
const someObjectLiteral = {
    firstProperty: '12',
    secondProperty: 'second'
};
console.log(typeof someObjectLiteral);

// Function
const someFunction = new Function();
console.log(typeof someFunction);

// Date
const someDate = new Date();
console.log(typeof someDate);
