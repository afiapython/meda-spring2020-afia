var counter = 0;

while (10 > counter) {
    // code to run per loop.
    counter = counter + 1;
    console.log(counter);

    //The ++ will add a 1 to the existing variable value;
    //counter++;

    //The -- will subtract a 1 to the existing variable value;
    //counter--;
}
// for loop is short hand for while loop
for (var counter = 0; 10 > counter; counter = counter + 1) {
    console.log(counter);
}
var special = 1;

// outer loop will run for 10 times, for each time we are executing another loop that will itself run 10 times.
for (var i = 0; i < 10; i++) {

    //The inner loop that will run once(ten times).
    for (var e = 0; e < 10; e++) {

        console.log("running" + special);
        special++;

    }

    for (var x = 12; 49 > x; x = x + 2) {

        console.log(x);
    }

    for (var i = 0; i <= 48; i = i + 1) {
        console.log("Loop #" + i);

        if (i % 2 == 0) {
            console.log(i);
        } else {
            continue;
        }
    }


}