//If else statements,conditional statements
//if (condition) {}
if (true) {
    console.log("This code ran if the if statement was true.");
}

console.log("End of script");

//comparison operators or "comparitors"
/*
== equal to
>= greater than or equal
<= lessthan or equal
>
<
!=
*/

var age = 14;
if (age >= 21) {
    console.log("congrats,go get drunk1");
}

var test = "1000";

if (test == 1000) {
    console.log("test!");
}


//Type coercin: Forces a datatype to be another datatype.
// follow allow type coercin: == >= <= !=
//these do not allow type coercion: === >== <== !==
var sayHello;
if (sayHello) {
    console.log("hello");
}
else {
    console.log("goodbye");
}

//truthy and falsy values.

//if a variable is holding any of the following it will become a false boolean:

/*
list of most common falsys
Falsy
undefined
null
0
""
NaN

list of most common truthys

"0"
-1


*/
var checkIfTrue = "";
if (checkIfTrue) {
    console.log("the " + checkifTrue + " value is truthy");
} else {
    console.log("the " + checkIfTrue + " value is falsy");
}


//logical operators: &&,||,!
// && || !=

var firstBool = true;
var secondBool = false;

if (firstBool && secondBool) {
    console.log("true");
}
if (firstBool || secondBool) {

}

//if else section,allows you to test sometthing and run
//other code if the first question was false.valueOf

var level = 25;

if (level > 0 && level < 18) {
    console.log("child");
} else if (level < 0) {
    console.log("not born");
}
else if (level >= 0 && level < 112) {
    console.log("adult");
} else {
    console.log("living");
}

/*
if always comes first.
else if must come after if.else ifs are optional.
else must come last.else are optional.
only one else per if statement.
*/

//multiple logical operators
//all && go first,then ||
if (true && false || true || false && true) {

}

if (false || true || false)


//If && it will go from left to right




}



