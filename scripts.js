// -----------------------------------------
//      1 - VARIABLES ASSIGNMENT
// -----------------------------------------

// var pageTitle = 'Displaying Javascript in web pages.';
// document.getElementById('title').innerHTML = pageTitle;

// -----------------------------------------
//      2 - NUMBERS - ARITHMETIC
// -----------------------------------------

// var number1 = 5;
// var Number1 = 10;

// var total = number1 + Number1;

// console.log(total);

//5 == 5;     TRUE    EQUAL TO
//5 === 5;    TRUE    EQUAL VALUE AND EQUAL TYPE
//5 === '5';  FALSE

// var x = 10;
// x++;
// x++;
// x--;
// console.log(x);

// -----------------------------------------
//     3 - JS STRINGS
// -----------------------------------------

// var firstName = 'Anna';
// var secondName = 'Baker';

// var quote = "my name is 'Chris'";

// var name = 'Chris';
// var nameLength = name.length;

// var paragraph =
// 	'\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco "laboris nisi ut aliquip" ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate \'velit esse cillum\' dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// console.log(firstName + secondName);
// console.log(quote);

// document.write(name + ' is ' + 31);

// console.log(paragraph);

// console.log(nameLength);

// -----------------------------------------
//      4 - CHALLENGE - DISPLAY USERS SCORE
// -----------------------------------------

// var player = 'Anna';
// var score = 100;

// var displayScore = '<h3>' + player + "'s score is " + score + ' points!</h3>';

// console.log(player, score);

// document.write(displayScore);

// -----------------------------------------
//      5 - STRING METHODS
// -----------------------------------------

// var string = 'Learning Javascript';
// var uppercase = string.toUpperCase();
// var lowercase = string.toLowerCase();
// var split = string.split(' ');
// var joinedString = split[0].concat(split[1]);
// var slice = string.slice(2, 6);

// console.log(uppercase);
// console.log(lowercase);
// console.log(split);
// console.log(split[1]);
// console.log(joinedString);
// console.log(slice);

// var sentance = 'I want to learn Javascript to build websites';
// var newSentance = sentance.replace('websites', 'games');

// console.log(newSentance);

// -----------------------------------------
//      6 - CHALLENGE - NAME FORMATTER
// -----------------------------------------

// var name = 'AnNa bAkEr';
// var split = name.split(' ');
// var name1 = split[0]
// 	.slice(0, 1)
// 	.toUpperCase()
// 	.concat(split[0].slice(1).toLowerCase());
// var name2 = split[1]
// 	.slice(0, 1)
// 	.toUpperCase()
// 	.concat(split[1].slice(1).toLowerCase());

// var concat = name1 + ' ' + name2;

// console.log(concat);

// -----------------------------------------
//      7 - ARRAYS
// -----------------------------------------

// var users = [];

// users[0] = 'Chris';
// users[1] = 'Mike';
// users[2] = 'Paul';

// document.write(users + '<br />');

// var users2 = ['Chris', 'Mike', 'Paul'];

// document.write(users2.length);

// -----------------------------------------
//      8 - ARRAY METHODS
// -----------------------------------------

// var users = ['Chris', 'Mike', 'Paul'];

// users.push('Tom');
// users.unshift('Bob');
// users.shift();
// users.pop();
// users.reverse();

// var slice = users.slice(1, 2);

// document.write(users + '<br />');

// document.write(slice);

// -----------------------------------------
//      9 - FUNCTIONS
// -----------------------------------------

// var a = 5;
// var b = 10;

// function myFunction() {
// 	var c = a * b;
// 	document.write(c);
// }

// myFunction();

// var score = 0;
// var lives = 10;
// var gameOver = false;

// function lifeLost() {
// 	score = 0;
// 	lives--;
// 	gameOver = true;
// 	document.write('<h2>Game Over, you have ' + lives + ' lives left.</h2>');
// }

// lifeLost();
// lifeLost();
// lifeLost();
// lifeLost();
// lifeLost();
// lifeLost();
// lifeLost();
// lifeLost();
// lifeLost();
// lifeLost();

// -----------------------------------------
//      10 - FUNCTION PARAMETERS
// -----------------------------------------

// function alertMessage(message) {
// 	console.log(message);
// }

// alertMessage('I am learning Javascript!');

// function multiplyNumber(num1, num2) {
// 	console.log(num1 * num2);
// }

// multiplyNumber(5, 4);

// -----------------------------------------
//      11 - SCOPE
// -----------------------------------------

// var a = 2;
// var b = 5;

// function multiply() {
// 	console.log(a * b);
// }

// multiply();

// console.log(a);

// -----------------------------------------
//      12 - OBJECTS
// -----------------------------------------

// var phone = new Object();

// phone['manufacturer'] = 'Apple';
// phone['model'] = 'iPhone';
// phone['color'] = 'silver';

// console.log(phone);

// var phone = new Object();

// phone.manufacturer = 'Apple';
// phone.model = 'iPhone';
// phone.color = 'silver';

// var phone = {
// 	manufacturer: 'Apple',
// 	model: 'iPhone',
// 	color: 'silver',
// 	features: {
// 		bluetooth: true,
// 		wifi: true,
// 		gps: false
// 	}
// };

// console.log(phone);
// console.log(phone['model']);
// console.log(phone.features.gps);

// function yourPhone() {
// 	console.log('Manufacturer: ' + phone.manufacturer);
// }

// yourPhone();

// -----------------------------------------
//      13 - JAVASCRIPT MATH
// -----------------------------------------

// console.log(Math.PI); // pi

// console.log(Math.random() * 10); // random #

// console.log(Math.ceil(Math.random() * 100)); // round up

// console.log(Math.floor(Math.random() * 100)); // round down

// console.log(Math.round(Math.random() * 100)); // round to nearest whole number

// console.log(Math.min(8, 15, 3, 648)); // finds lowest number

// console.log(Math.max(8, 15, 3, 648)); // finds highest number

// -----------------------------------------
//      14 - CHALLENGE - RANDOM NUMBER
// -----------------------------------------

var roundedNumber = Math.round(Math.random() * 100) + 1;

console.log(roundedNumber);
