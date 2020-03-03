//property
Math.PI;
Math.SQRT2;

//pi is the variable belong to math library

//method
Math.random();

function random() {

}
var myArray = [null, undefined, NaN, 0, "", false];

console.log(myArray[3]);

myArray[2] = 100;

console.log(myArray);

myArray[6] = {};

console.log(myArray);

myArray[0] = null;
myArray[1] = null;
myArray[2] = null;
myArray[3] = null;

//Array.push();//methods or functions belong to array class
//Array.pop();
//Array.shift();
//Array.unshift();
//Array.length  //property

//Array push method.argument provided is added to the end of the array.
myArray.push("hello");

console.log(myArray);

//Array pop method.no argument,removes and returns the last item in the array.

var removedDataPiece = myArray.pop();

console.log(myArray);
console.log(removedDataPiece);


//Array shift method.no argument,removes and returns the first item in the array.

var removedFirstItem = myArray.shift();

console.log(myArray);
console.log(removedFirstItem);


//Array unshift method ,argument provided is added to the start of the array.

myArray.unshift(1000);
console.log(myArray);

//Array length property.returns the amount of items in the array in the form of a number.

console.log(myArray.length);


for (var i = 0; i < 10; i++) {
    console.log(myArray[i]);
}









