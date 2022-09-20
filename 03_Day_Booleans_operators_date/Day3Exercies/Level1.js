// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = "James";
const lastName = "Smith";
let country = "USA";
let city = "Orlando";
let age = 34;
let isMarried = true;
let year = 1994;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
// Check if type of '10' is equal to 10
console.log("10" == 10);
// Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10);
// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
console.log(10 > 9);
console.log("word".length > "tea".length);
console.log("99" == 99);
// Write three JavaScript statement which provide falsy value.
console.log(10 < 9);
console.log("word".length <= "tea".length);
console.log("99" === 99);
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log("");
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != "4"); //false
console.log(4 == "4"); // true
console.log(4 === "4"); //false
// Find the length of python and jargon and make a falsy comparison statement.
console.log(
  "The length of python is less than jargon: \n" +
    ("python".length < "jargon".length)
);
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true
// There is no 'on' in both dragon and python
console.log(!('dragon'.includes('on') && 'python'.includes('on'))); //false

// Use the Date object to do the following activities
const now = new Date()
// What is the year today?
console.log(now.getFullYear());
// What is the month today as a number?
console.log(now.getMonth());
// What is the date today?
console.log(now.getDate());
// What is the day today as a number?
console.log(now.getDay());
// What is the hours now?
console.log(now.getHours());
// What is the minutes now?
console.log(now.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime());
