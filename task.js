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