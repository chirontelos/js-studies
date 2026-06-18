let x = 1;

let primeArray = [2, 3, 5, 7];

for (let i = 0; i < 1000; i++) {
    let testArray = [];

    for (let y = 0; y < primeArray.length; y++) {
        // stores true if number divided by primeArray numbers and the result divided by 1 has remainder different from zero
        // if all the values stored are true, then the number is prime
        // edit: in truth, this method is flawed due to some numbers being disible by some prime numbers, like number 989 being divisible by 23 and 43 and not by 2,3,5 or 7
        testArray.push(x / primeArray[y] % 1 !== 0);
    }
    let z = 0;

    for (let j = 0; j < testArray.length; j++) {
        if (testArray[j] == true) {
            z += 1;
        }
    }

    if (z == 4) {
        console.log(x);

    }
    // console.log(x + " " + testArray);
    testArray = [];
    //if all results of division are floats then number is prime

    x += 1;
}
