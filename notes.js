/*
/I am using comments to separate each section of notes
*/

// I am using single line comments for my notes

/*
/Reserved words
*/

// we can't use these because the interpreter uses these in a particular way

// Start with this to make sure my file runs
// node notes.js
// console.log('this ran');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words
// Look at reserved words versus others...
// let true = 'yes';
// console.log('this is showing where my file is running');
// console.log(num);
// console.log(num2);


// console.log('this ran');

// let num = 5;
// let trueVar = 'yes';

// this won't run because true is a reserved word

// let num2 = 8.9;
// console.log('this is showing where my code is running')

// This is a single line comment

/* 
this is a multi line comment
everything in here is a comment
*/

/* 
/   console.log()
*/
// this will cause an error
// console.log( won)
// console.log('strings need to be in quotes');
// console.log("double quotes also work");
// console.log(`these are backticks, they are next to the 1 on your keyboard`);
// this works because it's a number
// console.log(233);
// this works because true/false are reserved and boolean (we'll explain that more later)
// console.log(true);

/*
*   Data Types
*/

// First, let's list all of the data types, then we'll see examples of each one
// Number - Integers and Float
// String 
// Boolean - true/false
// Null - Does not belong to any type described above
//      Its purpose is to indicate that there is no value
//      Null is an empty or non-existent value, and must be assigned.
// Undefined - Indicates that a variable had not been assigned a value or null.
//      variables are often declared without a value
//      the value could be something that has yet to be calculated or something that will be provided later, like user input
// Objects

// In order to show examples, we need to know how to DECLARE a variable
// Variable declarations can use one of three keywords: var, let, and const
// var and let can both be changed, but the difference is scope
// const is not reassignable
// we will talk more about scope later, but you should use let rather than var
// examples:
// var stringOne = 'this is a string example';
// let stringTwo = 'this is another string example';
// const stringThree = 'this is a constant string example';
// console.log(stringOne);
// console.log(stringTwo);
// console.log(stringThree);
// notice that there are no spaces in variable names
// it won't work
// use camelCase
// or snake_case
// or kebab-case

/*
*   typeof
*/
// using the variables that we already declared and initialized
// check the type of value that was assigned to each variable
// we need to console.log() so we can see what typeof returns
console.log('======================================');
// console.log(typeof(42));
// console.log(typeof(num));
// console.log('num is: ' + num);
// console.log(typeof(num2));
// console.log('num is: ' + num2);
// console.log(typeof(num1));
// console.log(typeof(stringOne));
// console.log(typeof(stringThree));
// console.log(typeof(stringTwo));
// console.log(typeof(brandNewVar));
// let notInitVar;
// console.log(typeof(notInitVar));

// what's the difference between the last two?
// scope
// https://www.programiz.com/javascript/variable-scope#:~:text=Note%3A%20In%20JavaScript%2C%20var%20is,visit%20JavaScript%20let%20vs%20var.
// brandNewVar = 7;
// notInitVar = 7;

// let something = 8;
// somethingElse = 9;
// console.log(something, somethingElse);

console.log('============================================');
//another example of a constant
// const PI = 3.14;

/*
/Arithmetic Operators
*/

// The + operator, which returns the addition of two values.

// e.g. 3 + 4 returns 7
// The - operator, which returns the difference between two values.

// e.g. 3 - 2 returns 1
// The * operator, which returns the product of two values.

// e.g. 6 * 4 returns 24
// The / operator, which returns the division of two values.

// e.g. 16 / 8 returns 2
// The % operator, which returns the remainder of two values.

// e.g. 14 % 3 returns 2

// console.log(3+4);
// console.log(3-2);
// console.log(6*4);
// console.log(14%3);

// lets look at some examples
let arithmetic1 = 10;
let arithmetic2 = -1;
let arithmetic3 = 9;
let arithmetic4 = 0;
let arithmetic5 = 2;


// adding with +

// console.log("now we are adding");
// console.log(arithmetic1 + arithmetic2);
// console.log(arithmetic2 + arithmetic3);

// subtracting with -
// console.log("now we are subtracting");
// console.log(arithmetic4 - arithmetic1);
// console.log(arithmetic1 - arithmetic3);

// mnultiplying with *
// console.log("now we are mnultiplying");
// console.log(arithmetic1 * arithmetic5);
// console.log(arithmetic2 * arithmetic5);
// console.log(arithmetic1 * arithmetic4);


// dividing with /
// console.log("now we are dividing");
// console.log(arithmetic1 / arithmetic5);
// console.log(arithmetic3 / arithmetic5);
// console.log(arithmetic1 / arithmetic4);

// finding the remainder with %
// console.log("now we are finding remainder with %");
// console.log(arithmetic1 % arithmetic5);
// console.log(arithmetic3 % arithmetic5);
// console.log(arithmetic1 % arithmetic3);
// console.log(arithmetic3 % arithmetic1);
// console.log(arithmetic1 % arithmetic4);

console.log('=========================================');

// some shorthand notation
let newNumber = 10; //resetting the variable to the same value so that we can see the two act the same
newNumber = newNumber + 1;
// console.log(newNumber);

// this will work for all 5 major operations, and you can use the shorthand with any value
newNumber = 10;
newNumber += 1;
// console.log(newNumber);


newNumber = 9;
newNumber -= 3; 
// console.log(newNumber);//new number is now equal to 6
newNumber /= 3;
// console.log(newNumber); //new number is now equal to 2
newNumber *= 3;
// console.log(newNumber); //new number is now equal to 6
newNumber %= 3;
// console.log(newNumber); //new number is now equal to 0

// only for +1 or -1 there is more shorthand
// instead of +=1, you can use ++
// instead of -=1, you can use --
newNumber++;
// console.log(++newNumber);
console.log(newNumber);
newNumber--;
console.log(newNumber);

console.log(newNumber++);
console.log(newNumber);

// let exNum = ++newNumber + 5;
// console.log(exNum);

/*comparison operators

these operators all return true or false
> is strictly greater than */

console.log(5 > 4 );
console.log(4 > 5 );
console.log(4 > 4 );

// >= is greater than or equal to
/*console.log(5 >= 4 );
console.log(4 >= 5 );
console.log(4 >= 4 );

// < strictly less than
console.log(5 < 4 ),
console.log(4 < 5 );
console.log(4 < 4 );

// <= is less than or equal to
console.log(5 <= 4 );
console.log(4 <= 5 );
console.log(4 <= 4 );*/

// the = is the assignment operator
// the == checks if 2 values are equal to each other
// the === checks if 2 values are equal to each other and they bave same type

// console.log('using ==');
// console.log(3 == 3);
// console.log(3 =='3');
// console.log('3' == '3');

console.log('using ===');
console.log(3 === 3);
console.log(3 ==='3');
console.log('3' ==='3');

// There is also != and !==
// console.log('using != and !==')
// console.log(3 != '3');
// console.log(3 == '3');

// console.log(3 !== '3');
// console.log(3 === '3');

// console.log(1 != 2);
// console.log(1 == 2);

/*
/ Logical Operators
*/
// && - AND 
// both things need to be true in order for && to be true
// console.log('the AND output');
// console.log('everything is true if i see true');
// console.log((3 > 1) && (9 === 9));  // both are true
// console.log((3 > 1) && (9 === 0));  // the first is true and the second is false
// console.log((3 < 1) && (9 === 9));  // the first is false and the second is true
// console.log((3 < 1) && (9 === 0));  // both are false

// // || - OR 
// // ONLY one thing needs to be true for || to be true
// console.log('the OR output');
// console.log('at least one thing is true if i see true');
// console.log((3 > 1) || (9 === 9));  // both are true
// console.log((3 > 1) || (9 === 0));  // the first is true and the second is false
// console.log((3 < 1) || (9 === 9));  // the first is false and the second is true
// console.log((3 < 1) || (9 === 0));  // both are false

// // ! negates the result
// console.log('negation')
// console.log(!true);
// console.log(!false);

// clg shothand show console.log ===================very very important==========================