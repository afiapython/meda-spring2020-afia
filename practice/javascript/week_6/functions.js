//Intro to functions.

//Example of functions we have used so far.

console.log();

Math.round();
Math.floor();
Math.ceil();
Math.random();

var currentTime = Date.now();
console.log(currentTime);


// A function that belongs to a class is called a method.

//A variable that belongs to a class("library")
//is called a "property".



//function  nameOfFunction() {}

function nameOfFunction() {
    /* Similar to CSS Rulesets 
    selector {
        property: value;
    }
    */
    console.log("hello");
    console.log("hello");
    console.log("hello");


}
nameOfFunction();
nameOfFunction();

function nameOfPrp() {
    console.log(678);
    console.log("Afia");
    console.log(true);
}
nameOfPrp();

function takeDataIn() {
    console.log();
    takeDataOut();
}

//Arguments and Parameters

//"hello" is the argument
//console.log("hello" 100, true);
// text is the parameter (variable) that will accept any data
//that is given to this function.
function takeDataOut(text1, text2) {
    console.log(text1);
    console.log(text2);
}

takeDataOut("How are you doing?", "jesser");
takeDataOut("no", "no");
//takeDataOut("my code is awesome");


function adder(number1, number2) {
    var sum = number1 + number2;
    console.log("the sum of " + number1 + " and " + number2 + " is " + sum);
}

adder(1, 2);








