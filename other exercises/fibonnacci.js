//initial values
let x = 0;
let y = 1;

//until 1000, but you can put true, instead of x < 1000 if wanting to print to infinity
while (x < 1000) {
    let calc = x + y;
    x = y;
    y = calc;

    console.log(calc);
}
