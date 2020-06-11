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

// var roundedNumber = Math.round(Math.random() * 100) + 1;

// console.log(roundedNumber);

// -----------------------------------------
//      15 - DATES
// -----------------------------------------

// var showDate = new Date();

// console.log(showDate);

// var date = new Date();
// var dayOfMonth = date.getDate();
// var dayOfWeek = date.getDay();
// var month = date.getMonth();
// var year = date.getFullYear();
// var hours = date.getHours();
// var minutes = date.getMinutes();
// var seconds = date.getSeconds();

// document.write(
// 	"Today's date is:<br />" +
// 		'Day:' +
// 		dayOfMonth +
// 		'<br />' +
// 		'Month:' +
// 		month +
// 		'<br />' +
// 		'Year:' +
// 		year
// );

// var setDate = new Date();
// setDate.setMonth(11);
// setDate.setFullYear(2019);

// console.log(setDate);

// -----------------------------------------
//      16 - IF STATEMENTS - COMPARISON
// -----------------------------------------

// var a = 10;
// var b = 20;

// if (a >= b) {
// 	document.write('a is equal to b!');
// }

// var loggedIn = true;
// var user = 'Chris';

// if (loggedIn) {
// 	document.write('Welcome ' + user);
// }

// -----------------------------------------
//      17 - IF ELSE STATEMENTS
// -----------------------------------------

// var loggedIn = false;
// var user = 'Chris';

// if (loggedIn) {
// 	document.write('Welcome ' + user);
// } else {
// 	document.write('Please log in to view page');
// }

// var speedLimit = 70;
// var yourSpeed = 70;

// if (yourSpeed < speedLimit) {
// 	document.write('Thank you for driving safely');
// } else if (yourSpeed > speedLimit) {
// 	document.write('Please slow down');
// } else {
// 	document.write('Careful, you are driving at the speed limit');
// }

// -----------------------------------------
//      18 - MINI CHALLENGE - AGE CHECKER
// -----------------------------------------

// var minAge = 21;
// var yourAge = 26;

// if (yourAge < minAge) {
// 	document.write("You're too young!");
// } else if (yourAge > minAge) {
// 	document.write("You're old :P");
// } else {
// 	document.write("You're just right");
// }

// -----------------------------------------
//      19 - LOGICAL OPERATORS
// -----------------------------------------

// var number1 = 10;
// var number2 = 20;

// if (number1 === 10 && number1 < 20) {
// 	document.write('<h2>Condition is true</h2>');
// }

// if (number2 === 10 || number2 < 30) {
// 	document.write('<h2>Condition is true</h2>');
// }

// if (number2 !== number1) {
// 	document.write('<h2>Condition is true</h2>');
// }

// -----------------------------------------
//      20 - SWITCH STATEMENTS
// -----------------------------------------

// var month = 'November';

// switch (month) {
// 	case 'January':
// 		document.write('Happy New Year');
// 		break;

// 	case 'July':
// 		document.write('Half way through the year');
// 		break;

// 	case 'November':
// 	case 'December':
// 		document.write('Happy Holidays');
// 		break;

// 	default:
// 		document.write('The month is ' + month);
// }

// -----------------------------------------
//      21 - MINI CHALLENGE - HIGHER OR LOWER GAME
// -----------------------------------------

// var randomNum = Math.random() * 10;
// randomNum = Math.round(randomNum);

// function higher() {
// 	if (randomNum > 5) {
// 		document.getElementById('textField').innerHTML =
// 			'Correct! The number was higher than 5.<br />Number: ' + randomNum;
// 	} else {
// 		document.getElementById('textField').innerHTML =
// 			'The number was not higher than 5.<br />Number: ' + randomNum;
// 	}
// }

// function lower() {
// 	if (randomNum <= 5) {
// 		document.getElementById('textField').innerHTML =
// 			'Correct! The number was lower than 5.<br />Number: ' + randomNum;
// 	} else {
// 		document.getElementById('textField').innerHTML =
// 			'The number was not higher than 5.<br />Number: ' + randomNum;
// 	}
// }

// function reset() {
// 	window.location.reload();
// }

// console.log(randomNum);

// -----------------------------------------
//      22 - WHILE LOOPS
// -----------------------------------------

// var i = 1;

// while (i < 10) {
// 	document.write(i + ' ');
// 	i++;
// }

// document.write('<br>');

// var foods = ['pasta', 'pizza', 'fish'];
// var j = 0;

// while (foods[j]) {
// 	document.write(foods[j] + ' ');
// 	j++;
// }

// -----------------------------------------
//      23 - DO WHILE LOOPS
// -----------------------------------------

// var i = 1;

// do {
// 	document.write(i + '<br>');
// 	i++;
// } while (i > 10);

// -----------------------------------------
//      24 - FOR LOOPS
// -----------------------------------------

// var i = 1;

// for (i = 1; i < 10; i++) {
// 	document.write(i + '<br>');
// }

// var foods = ['pasta', 'pizza', 'fish'];

// for (i = 0; i < foods.length; i++) {
// 	document.write(foods[i] + '<br>');
// }

// -----------------------------------------
//      25 - MINI CHALLENGE - PHONE BOOK
// -----------------------------------------

// var names = ['chris', 'paul', 'mike', 'andrew', 'don'];
// var i = 1;

// for (i = 0; i < names.length; i++) {
// 	names.sort();
// 	document.write('<pre>' + (i + 1) + ': ' + names[i] + '</pre>');
// }

// -----------------------------------------
//      26 - ACCESSING ELEMENTS
// -----------------------------------------

// document.getElementById('title').innerHTML = 'Displaying Javascript in webpages.';

// document.querySelector('.first').style.backgroundColor = 'red';

// var selector = document.getElementsByClassName('heading');
// selector[1].innerHTML = 'Class name selected';

// var selector2 = document.getElementsByTagName('p');
// selector2[1].innerHTML = 'Tag name selected';

// var numberOfImages = document.images.length;

// document.getElementById('example').innerHTML = 'This page has ' + numberOfImages + ' images.';

// -----------------------------------------
//      27 - MANIPULATING ELEMENTS
// -----------------------------------------

// document.getElementById('title').innerHTML = 'This changed with Javascript';

// document.getElementById('title').style.color = 'red';
// document.getElementById('title').style.fontSize = '20px';

// document.getElementById('title').id = 'id1';
// document.getElementById('title').className = 'blue';

var newElement = document.createElement('div');
newElement.id = 'id1';
var addText = document.createTextNode('new text string');
var newContent = document.getElementById('title');

newElement.appendChild(addText);

document.body.insertBefore(newElement, newContent);
