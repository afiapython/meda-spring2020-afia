function adder(num1, num2) {
    return num1 + num2;
}

console.log(adder(100, "Tony"));

/*
1) 100 and tony sent to the adder function.
2) adder function runs, and places 100 and tony,into num1 and num2.
3)before we can return a value,we need to add/
concatenate. we call num1 and num2 variables for
its values,and then add/concatenate them together.

4) the return keyword says thet we will return this
single value back to wherever the function was called
5)the adder function har returned 100tony as a
single string and is replaced by that value.
6)because this value is inside of the console.
log arguments area it will be sent off to
the console.log function.
*/


function taxCalculator(itemPrice) {
    var tax = itemPrice * .085;
    var taxedFixed = tax.toFixed(2);
    var taxNumber = parseInt(taxedFixed);
    return taxNumber;

}

var laptopPrice = 999.95;
var laptopTax = taxCalculator(laptopPrice);

console.log("Price of item: " + laptopPrice + ". Tax on item: " + laptopTax + ". total cost: $" + (laptopTax + laptopPrice) + ".")


/*
Create a function called mathifier

This function will take two numbers

with these two numbers,you will add them,
then add the sum to the first number
and then multiply that by the second number.


the function will return the result.
*/

function mathifier(num1, num2) {
    var sum = num1 + num2;
    var s2 = sum + num1;

    var result = s2 * num2;
    return result;

}

console.log(mathifier(2, 3));


/*

This function will be called mathResults

This function takes only 2 numbers

this function will console.log the first number
and the second number

this function will console.log each of the following
the sum of these two numbers
the difference of these two numbers
the product of these two numbers
the dividend of these two numbers
the leftovers of these two numbers.(modulo)

bonus: each console log will tellme
what that number is about.

*/

function mathResults(n1, n2) {

    var sum = n1 + n2;
    console.log(sum);
    var diff = n1 - n2;
    console.log(diff);
    var div = n1 / n2;
    console.log(div);
    var pro = n1 * n2;
    console.log(pro);
    var rem = n1 % n2;
    console.log(rem);
    //return result;
}
mathResults(2, 3);



