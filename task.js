//Bollean Expressions
console.log(5)
console.log(5>3) //True
console.log(5<3)
console.log(8<=8)
console.log(3<=3)
//Arithmetics
console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3
//arrays 
let arr = [20, 22, 21, 12, 211];
console.log(arr);

//array methods 
// 1. pop method
let arr1 = [20, 22, 21, 12, 211];
console.log(arr1.pop()); // 
//string methods

//objects 

//this keyword

//creating an empty array
let clex = Array();
console.log(clex)
//
let clez = Array(0);
console.log(clez)
//assigning empty values into an array
let clecc = Array(8);
console.log(clecc);
//
const PI = Math.PI

console.log(PI)                           // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))               // 3 to round values to the nearest number

console.log(Math.round(9.81))             // 10

console.log(Math.floor(PI))               // 3 rounding down

console.log(Math.ceil(PI))                // 4 rounding up

console.log(Math.min(-5, 3, 20, 4,5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4,5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      //10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))      //1.4142135623730951

// Power
console.log(Math.pow(3, 2)) // 9

console.log(Math.E) // 2.718

// Logarithm
//Returns the natural logarithm of base E of x, Math.log(x)
console.log(Math.log(2))    // 0.6931471805599453
console.log(Math.log(10))   // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

//Random number generator
//The JavaScript Math Object has a random() method number generator which generates number from 0 to 0.999999999...
let randomNum = Math.random() // generates 0 to 0.999
let randomNum1 = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10

//Strings are texts, which are under single or double quote. To declare a string, we need a variable name, assignment operator, a value under a single quote, double-quote, or backtick. Lets' see some examples of string:
let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'

//String Concatenation
//Connect two or more strings together is called concatenation.
// Declaring different variables of different data types

let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

//Long Literal Strings
//A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line. Example:
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)

//Escape Sequences in string
//In JavaScript and other programming language \ followed by some characters is an escape sequence. Let's see the most common escape characters:

//\n: new line
//\t: Tab means(8 spaces)
//\\: Back slash
//\': Single quote (')
//\":Double quote (")

console.log('I hope every one is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a back slash  symbol (\\)') // To write a back slash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' is\'t correct in 2020')

//Template Literals(Template Strings)
//To create a template string, we use two backticks. We can inject data as expression inside a template string. To inject data, we enclose the expression with a curly bracket({}) followed by a $ sign. See the syntax below.
////Syntax
`String literal text`
`String literal text ${expression}`

//Example: 1
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

//Example:2
let firstName1 = 'Asabeneh'
let lastName1 = 'Yetayeh'
let country1 = 'Finland'
let city1 = 'Helsinki'
let language1 = 'JavaScript'
let job1 = 'teacher'
let age = 250
let fullName1 = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName1}. I am ${age}. I live in ${country1}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName1}. I live in ${city1}, ${country1}. I am a ${job1}. I teach ${language1}.`
console.log(personInfoTwo)
console.log(personInfoThree)

//I am Asabeneh Yetayeh. I am 250. I live in Finland.
//I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.

//String Methods
//Everything in JavaScript is an object. A string is a primitive data type that means we can not modify once it is created. The string object has many string methods. There are different string methods that can help us to work with strings.

//length: The string length method returns the number of characters in a string included empty space. Example:
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName2 = 'Asabeneh'
console.log(firstName2.length)  // 8

//Let us access different characters in 'JavaScript' string.
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t

//toUpperCase(): tlet string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName3 = 'Asabeneh'

console.log(firstName.toUpperCase())  // ASABENEH

let country3 = 'Finland'

console.log(country.toUpperCase())    // FINLANDhis method changes the string to uppercase letters.

//toLowerCase(): this method changes the string to lowercase letters.
let string4 = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName4 = 'Asabeneh'

console.log(firstName4.toLowerCase())  // asabeneh

let country4 = 'Finland'

console.log(country.toLowerCase())   // finland

//substr(): It takes two arguments, the starting index and number of characters to slice.

let string1 = 'JavaScript'
console.log(string1.substr(4,6))    // Script

let countryA = 'Finland'
console.log(countryA.substr(3, 4))   // land

//substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the stopping index.

let string2 = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let country2 = 'Finland'

console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land

//split(): The split method splits a string at a specified place.
let string3 = '30 Days Of JavaScript'

console.log(string.split())     // ["30 Days Of JavaScript"]
console.log(string.split(' '))  // ["30", "Days", "Of", "JavaScript"]

let firstName5 = 'Asabeneh'

console.log(firstName.split())    // ["Asabeneh"]
console.log(firstName.split(''))  // ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//trim(): Removes trailing space in the beginning or the end of a string.
let string5 = '   30 Days Of JavaScript   '

console.log(string5)     
console.log(string5.trim(' '))

let firstName7 = ' Asabeneh '

console.log(firstName7)
console.log(firstName7.trim())

//includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.

let string7 = '30 Days Of JavaScript'

console.log(string7.includes('Days'))     // true
console.log(string7.includes('days'))     // false
console.log(string7.includes('Script'))   // true
console.log(string7.includes('script'))   // false
console.log(string7.includes('java'))     // false
console.log(string7.includes('Java'))     // true

let country7 = 'Finland'

console.log(country7.includes('fin'))     // false
console.log(country7.includes('Fin'))     // true
console.log(country7.includes('land'))    // true
console.log(country7.includes('Land'))    // false

//replace(): takes to parameter the old substring and new substring.
string.replace(oldsubstring, newsubstring)

let string11 = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let country11 = 'Finland'
console.log(country7.replace('Fin', 'Noman'))       // Nomanland

//charAt(): Takes index and it returns the value at that index

string.charAt(index)

let string9 = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

let lastIndex9 = string9.length - 1
console.log(string9.charAt(lastIndex9)) // t

//indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

string.indexOf(substring)

let string98 = '30 Days Of JavaScript'

console.log(string98.indexOf('D'))          // 3
console.log(string98.indexOf('Days'))       // 3
console.log(string98.indexOf('days'))       // -1
console.log(string98.indexOf('a'))          // 4
console.log(string98.indexOf('JavaScript')) // 11
console.log(string98.indexOf('Script'))     //15
console.log(string98.indexOf('script'))     // -1

//lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

//syntax
string.lastIndexOf(substring)

let string77 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string77.lastIndexOf('love'))       // 67
console.log(string77.lastIndexOf('you'))        // 63
console.log(string77.lastIndexOf('JavaScript')) // 38

//startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
//syntax
string.startsWith(substring)

let string99 = 'Love is the best to in this world'

console.log(string99.startsWith('Love'))   // true
console.log(string99.startsWith('love'))   // false
console.log(string99.startsWith('world'))  // false

let country98 = 'Finland'

console.log(country98.startsWith('Fin'))   // true
console.log(country98.startsWith('fin'))   // false
console.log(country98.startsWith('land'))  //  false

//endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

string.endsWith(substring)

let string74 = 'Love is the best to in this world'

console.log(string74.endsWith('world'))         // true
console.log(string74.endsWith('love'))          // false
console.log(string74.endsWith('in this world')) // true

let country77 = 'Finland'

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false

//search: it takes a substring as an argument and it returns the index of the first match.

string.search(substring)

let string75 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string75.search('love')) // 2

//match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

let string88 = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive

//Match syntax
// syntax
string.match(substring)

let string777 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string777.match('love'))

//["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]

let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]

//Let us extract numbers from text using regular expression. This is not regular expression section, no panic, we will cover regular expression in other section.

let txt = 'In 2019, I run 30 Days of Python. Now, in 2020 I super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

//repeat(): it takes a number argument and it returned the repeated version of the string.

string.repeat(n)

let string22 = 'love'
console.log(string22.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

//Checking Data types and Casting
//Checking data types
//Check Data types: To check the data type of a certain data type we use the typeof and we also change one data type to another. Example:

// Different javascript data types
// Let's declare different data types

let firstName22 = 'Asabeneh'      // string
let lastName22 = 'Yetayeh'        // string
let country22 = 'Finland'         // string
let city22 = 'Helsinki'           // string
let age22 = 250                   // number, it is not my real age, do not worry about it
let job22                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName22)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job22)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

//Changing data type(Casting)
//Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
//String to Int
//We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

//parseInt()
//Number()
//Plus sign(+)

let num1 = '10'
let numInt = parseInt(num1)
console.log(numInt) // 10

let num3 = '10'
let numInt3 = Number(num3)

console.log(numInt3) // 10

let num4 = '10'
let numInt4 = +num4

console.log(numInt4) // 10

//String to Float
//We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

//parseFloat()
//Number()
//Plus sign(+)

let num7 = '9.81'
let numFloat = parseFloat(num7)

console.log(num7Float) // 9.81
//
let num44 = '9.81'
let numFloat44 = Number(num44)

console.log(num44Float) // 9.81
//
let num5 = '9.81'
let numFloat5 = +num

console.log(num5Int) // 9.81

//Float to Int
//We can convert float numbers to integers. We use the following method to convert float to int:
//parseInt()

let num78 = 9.81
let num7Int = parseInt(num78)

console.log(num7Int) // 9


// Exercises: Data Types
// Declare variables and assign string, boolean, undefined and null data types
// The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.
// Exercise: String
// Declare a variable name company and assign it to an initial value 'Coding Academy'.
// Print the string on the browser console using console.log()
// Print the length of the string on the browser console using console.log()
// Change all the string to capital letters using toUpperCase() method
// Change all the string to lowercase letters using toLowerCase() method
// Cut(slice) out the first word of the string using slice, substr() or substring() method
// Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Check if the string contains a word Academy using includes() method
// Split the string into array using split() method
// Split the string Coding Academy at the space using split() method
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// Change Coding Academy to Microsoft Academy using replace() method.
// What is character at index 10 in 'Coding Academy' string use charAt() method.
// What is the character code of A in 'Coding Academy' string using charCodeAt()
// Use indexOf to determine the position of the first occurrence of c in Coding Academy
// Use lastIndexOf to determine the position of the last occurrence of c in Coding Academy.
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use lastIndexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' Coding Academy '.
// Use startsWith() method with the string Coding Academy make the result true
// Use endsWith() method with the string Coding Academy make the result true
// Use match() method to find all the c’s in Coding Academy
// Use match() to count the number all because's in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use concat() and merge 'Coding' and 'Academy' to a single string, 'Coding Academy'
// Use repeat() method to print Coding Academy 5 times
// Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'



//Booleans
//Boolean value is either true or false. Any comparisons return a boolean value which is either true or false.

let isLigtOn = true;
let isRaining = false;
let hungry = false;
let isMaried = true;

//

// Exercise: Booleans
// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
// Use all the following comparison operators to compare the following values: >, < >=, <=, !=, !==,===. Which are true or which are false ?
// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'


// Undefined

let firstName23;
console.log(firstName23); //not defined, because it is not assigned to a value yet

//Null
let empty = null;
console.log(empty); // -> null , means no value

//Exercise - 6 : Data types
// String, number, boolean, null, undefined and symbol(ES6) are JavaScript primitive data types.

// The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.

// Operators
// Arithmetic Operators
// Arithmetic operators are mathematical operators:+, -, _, /, _

let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;

console.log(sum, diff, mult, div, remainder); // ->7,1,12,1.33,1

let pI = 3.14;
let radius = 100;          // length in meter

const gravity = 9.81;      // in m/s2
let mass = 72;             // in Kilogram
const boilingPoint = 100;  // temperature in oC, boiling point of water
const bodyTemp = 37;       // body temperature in oC

// Lets calculate area of a circle

const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); // -> 314 m

// Lets calculate weight of a substance
const weight = mass * gravity;
console.log(weight); // -> 706.32 N(Newton)

// ConcatEnating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${body} oC.\nThe gravity of earth is ${gravity} m / s2.`
);

// Exercises : Arithmetic Operators
// JavaScript arithmetic operators are addition(+), subtraction(-), multiplication(*), division(/), modulus(%), increment(++) and decrement(--).

let operandOne = 4;
let operandTwo = 3;


// && ampersand example

const check1 = 4 > 3 && 10 > 5; // true and true -> true
const check2 = 4 > 3 && 10 < 5; // true and false -> false
const check3 = 4 < 3 && 10 < 5; // false and false -> false

// || pipe or, example

const check4 = 4 > 3 || 10 > 5; // true and true -> true
const check22 = 4 > 3 || 10 < 5; // true and false -> true
const check23 = 4 < 3 || 10 < 5; // false and false -> false

// ! Negation examples

let check11 = 4 > 3;           // -> true
let check33 = !(4 > 3);        // -> false
let isLightOn = true;        // -> true
let isLightOff = !isLightOn; // -> false
let isMarried = !false;      // -> true

// Exercises: Logical Operators
// Which are true or which are false ?

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')

// Comparison Operators

// Boolean value is either true or false. Any comparison return a boolean either true or false. Use all the following comparison operators to compare the following values: >, < >=, <=, !=, !==,===. Which are true or which are false ?

// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// Conditionals
// if
// We use if condition to check only on condition.

if (condition) {
    // code goes here
  }
  
  let isRaing = true;
  if (isRaing) {
    console.log('Remember to take your rain coat.');
  }

  if (condition) {
    // if the condition meets, this block of code runs
  } else {
    // if condition doesn't meet, this block code runs
  }
  
//   if else if else
// Whenever we have multiple conditions.

  let isRaning = true;
  if (isRaning) {
    console.log('You need a rain coat.');
  } else {
    console.log('No need for a rain coat.');
  }


  //switch
// Switch an alternative for if else if else

  var weather = 'cloudy';
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.');
    break;
  case 'cloudy':
    console.log('It might be cold, you need a jacket.');
    break;
  case 'sunny':
    console.log('Go out freely.');
    break;
  default:
    console.log(' No need for rain coat.');
    break;
}
// Switch More Examples
var dayUserInput = prompt('What day is it ?');
var day = dayUserInput.toLowerCase();
switch (day) {
  case 'monday':
    console.log('Today is Monday');
    break;
  case 'tuesday':
    console.log('Today is Tuesday');
    break;
  case 'wednesday':
    console.log('Today is Wednesday');
    break;
  case 'thursday':
    console.log('Today is Thursday');
    break;
  case 'friday':
    console.log('Today is Friday');
    break;
  case 'saturday':
    console.log('Today is Saturday');
    break;
  case 'sunday':
    console.log('Today is Sunday');
    break;

  default:
    console.log('It is not a week day.');
    break;
}