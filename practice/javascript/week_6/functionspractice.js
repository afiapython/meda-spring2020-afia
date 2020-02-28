//concatenation example

"a word" + "gabe";

"a number" + 100;

"hello" + true;

console.log("hello" + true);

console.log(100 + "a number");


console.log(100 + 100 + 100 + "hello");

console.log("hello" + 100 + 100 + 100);


function sentenceBuilder(person, place, action, item) {
    var firstPart = " went to  ";
    var secondPart = " , and did ";
    var thirdPart = " but there was a problem, ";
    var fourthPart = " did not work. ";

    var completeSentence = place + firstPart + place + action +
        secondPart + thirdPart + item + fourthPart;
    console.log(completeSentence);
}

sentenceBuilder("xxx", "sfo", "owner", "food");
sentenceBuilder("yyy", "Donuts", "eating", "concord");



function getNumber() {
    var theSpecialNumber = 42;
    return theSpecialNumber;

}

console.log(getNumber());

var newNumber = getNumber() + 100;

console.log(newNumber);



var results = getNumber() / 50;

console.log(results);

function getName() {
    var firstName = "Eduardo";

    return firstName;

}

console.log(getName() + " is a person.");
