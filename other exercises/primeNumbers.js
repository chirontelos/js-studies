//method: divide each number by all previous prime numbers,
// when a number is prime all numbers we use to divide it will result in a float number, except 1 and the number itself.
// ex: 17 / 2 = 8.5
//     17 / 3 = 5.6666...
//     and so on


let primeArray = [2];
let x = 2;

for (let i = 2; i < 1000; i++) {
    let count = 0;
    let result = [];

    for (let j = 0; j < primeArray.length; j++) {
        // 13 / 2 results in 6.5 and 6.5 % 1 results in 0.5, 0.5 is different from 0, so true is stored in result array
        result.push(i / primeArray[j] % 1 !== 0);

        // for each true we add 1 to count
        if (result[j] == true) {
            count += 1;
        }
    }

    // if the count and result.length are the same value then there is no divisor except 1 and the number itself
    if (count == result.length) {
        primeArray.push(i);
    }
}

for (let i = 0; i < primeArray.length; i++) {
    console.log("%s", primeArray[i],);
}

// my previous thesis in the previous version commited  was that I could get all primes by just dividing each number by prime numbers < 10, but this is false due to some numbers being divisible by 1, itself, and some other prime numbers, like 989 being divisible by prime numbers 23 and 43.
