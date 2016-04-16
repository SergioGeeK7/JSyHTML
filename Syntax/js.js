var x = 5;
var y = 6;
var z = x + y;

/*
JavaScript Literals
The most important rules for writing fixed values are:

Numbers are written with or without decimals:
*/
""
10.50
true
null
[]
1001
{first:"name"}
/*
Strings are text, written within double or single quotes:
*/

"John Doe"

'John Doe'

/*
JavaScript uses arithmetic operators ( + - *  / ) to compute values:
*/

(5 + 6) * 10

x * 10

x + 7

x / 3

x % 3

/*

The values can be of various types, such as numbers and strings.

For example, "John" + " " + "Doe", evaluates to "John Doe":
*/

"John" + " " + "Doe"

/*

JavaScript is Case Sensitive
All JavaScript identifiers are case sensitive. 

The variables lastName and lastname, are two different variables.
JavaScript does not interpret VAR or Var as the keyword var.

*/


lastName = "Doe";
lastname = "Peterson";


/*

Semicolons ;
Semicolons separate JavaScript statements.

Add a semicolon at the end of each executable statement:


*/


a = 5;
b = 6;
c = a + b;
/*
For best readability, programmers often like to avoid code lines longer than 80 characters.
If a JavaScript statement does not fit on one line, the best place to break it, is after an operator:

Example
*/
document.getElementById("demo").innerHTML =
"Hello Dolly.";


----

/*
This example uses a single line comment at the end of each line, to explain the code:

Example
*/

var x = 5;      // Declare x, give it the value of 5
var y = x + 2;  // Declare y, give it the value of x + 2






/*

JavaScript Keywords
JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

Here is a list of some of the keywords you will learn about in this tutorial:

Keyword	Description
break	Terminates a switch or a loop
continue	Jumps out of a loop and starts at the top
debugger	Stops the execution of JavaScript, and calls (if available) the debugging function
do ... while	Executes a block of statements, and repeats the block, while a condition is true
for	Marks a block of statements to be executed, as long as a condition is true
function	Declares a function
if ... else	Marks a block of statements to be executed, depending on a condition
return	Exits a function
switch	Marks a block of statements to be executed, depending on different cases
try ... catch	Implements error handling to a block of statements
var	Declares a variable
Note	JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.

*/
---

/*
Declaring (Creating) JavaScript Variables
Creating a variable in JavaScript is called "declaring" a variable.

You declare a JavaScript variable with the var keyword:
*/
var carName;
// After the declaration, the variable has no value. (Technically it has the value of undefined)

// To assign a value to the variable, use the equal sign:

carName = "Volvo";



/*
In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

A variable declared without a value will have the value undefined.

The variable carName will have the value undefined after the execution of this statement:

The variable carName will still have the value "Volvo" after the execution of these statements:
*/

Example
var carName = "Volvo";
var carName;


/*

Also try this:

Example

*/

var x = "5" + 2 + 3;

/*


JavaScript Type Operators
Operator	Description
typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type


*/

/*



=== (!=) ==


*/

null === undefined           // false
null == undefined            // true



/*
functiones
*/
function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}

var x = myFunction(4, 3);        // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;                // Function returns the product of a and b
}


/*


Mas Objetos

*/


var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

objectName.propertyName


/*

// scope

*/


function myFunction() {
    carName = "Volvo";

    // code here can use carName

}


/*

Metodos comunes en strings

*/
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;


var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
var str = "Apple, Banana, Kiwi";
var res = str.slice(7,13);
str = "Please visit Microsoft!";
var n = str.replace("Microsoft","W3Schools");
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
var str = "HELLO WORLD";
str.charAt(0);            // returns H
var txt = "a,b,c,d,e";   // String
var str = "HELLO WORLD";
str[0];                   // returns H
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

/*
Numbers

*/

var myNumber = 128;
myNumber.toString(16);     // returns 80
myNumber.toString(8);      // returns 200
myNumber.toString(2);      // returns 10000000

var myNumber = 2;
while (myNumber != Infinity) {          // Execute until Infinity
    myNumber = myNumber * myNumber;
}

var x =  2 / 0;          // x will be Infinity
var y = -2 / 0;          // y will be -Infinity


typeof Infinity;        // returns "number"


var x = 100 / "Apple";  // x will be NaN (Not a Number)
typeof NaN;             // returns "number"

var x = 9.656;
x.toFixed(0); 
parseInt("10.33");      // returns 10

/*

Number Methods


Method	Description
isFinite()	Checks whether a value is a finite number
isInteger()	Checks whether a value is an integer
isNaN()	Checks whether a value is Number.NaN
isSafeInteger()	Checks whether a value is a safe integer
toExponential(x)	Converts a number into an exponential notation
toFixed(x)	Formats a number with x numbers of digits after the decimal point
toPrecision(x)	Formats a number to x length
toString()	Converts a number to a string
valueOf()	Returns the primitive value of a number


*/
var x = Number.MAX_VALUE;


/*

The Math Object


*/
Math.round(4.4);            // returns 4
Math.max(0, 150, 30, 20, -8, -200);      // returns 150
Math.min(0, 150, 30, 20, -8, -200);      // returns -200
Math.random();       // returns a random number
Math.ceil(4.4);             // returns 5
Math.round(4.7);            // returns 5
Math.floor(4.7);            // returns 4
Math.PI         // returns PI
Math.abs(x)	 // Returns the absolute value of x

/*

Arrays

*/

var x = cars.length;         // The length property returns the number of elements in cars
var y = cars.sort();         // The sort() method sort cars in alphabetical order
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");                // adds a new element (Lemon) to fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";     // adds a new element (Lemon) to fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[10] = "Lemon";                // adds a new element (Lemon) to fruits
// associative arrays
var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;         // person.length will return 3
var y = person[0];             // person[0] will return "John"
// typeof

var fruits = ["Banana", "Orange", "Apple", "Mango"];

typeof fruits;             // returns object
Array.isArray(fruits);     // returns true
fruits.pop();              // Removes the last element ("Mango") from fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); //añadidos,removidos,elemento,elemento
fruits.splice(0, 1);        // Removes the first element of fruits
fruits.reverse();         // Reverses the order of the elements
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias","Linus"];
var myChildren = myGirls.concat(myBoys);     // Concatenates (joins) myGirls and myBoys
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);


/*
Objects

*/

var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14;            // This will cause an error
Object.keys()
Object.hasOwnProperty()





try {
    //Block of code to try
    throw "error";
}
catch(err) {
   // Block of code to handle errors
} 
finally {
    //Block of code to be executed regardless of the try / catch result
}


