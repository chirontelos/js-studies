//initial values
let x = 0;
let y = 1;

while (x < 1000) {
    let calc = x + y;
    x = y;
    y = calc;

    console.log(calc);
}
