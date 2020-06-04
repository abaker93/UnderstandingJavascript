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

var name = 'AnNa baKer';
var split = name.split(' ');
var name1 = split[0]
	.slice(0, 1)
	.toUpperCase()
	.concat(split[0].slice(1).toLowerCase());
var name2 = split[1]
	.slice(0, 1)
	.toUpperCase()
	.concat(split[1].slice(1).toLowerCase());

var concat = name1 + ' ' + name2;

console.log(concat);
