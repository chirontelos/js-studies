const prompt = require('prompt-sync')();

let option;
//Menu
function menu() {
    option = prompt(`
        choose a function to run:
        [1] getDayAndTime
        [2] getDateTwoFormats
        [3]
        [4]
        [5] exit program`);

    const options = [getDayAndTime, getDateTwoFormats, bool];
    console.log(options[option]);


}
do {
    menu();

} while (option !== 5);

while (true) {
    menu();
}
const name = prompt('What is your name? ');
console.log(`Hello ${name}`);

//1. display current day and time
//Write a JavaScript program to display the current day and time in the following format. 
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38
//
//Printar na tela dia e hora

console.log(getDayAndTime());

function getDayAndTime() {
    const date = new Date();

    let day = date.getDay();
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    //use switch to convert to day of weekday

    switch (day) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            break;
    }

    return "Today is: " + day + "\n" +
        `Current time is: ${hour} PM : ${minutes} : ${seconds}`;

    // console.log("today is: %s ", day);
    // console.log("Current time is: %s PM : %s : %s", hour, minutes, seconds);

    //Better solution using toLocale[...]:

    // let date = new Date();
    // let day = date.toLocaleDateString('en-US', { weekday: 'long' });
    // let time = date.toLocaleTimeString('en-US');
    //
    // console.log("today is: %s ", day);
    // console.log("Current time is: %s ", time);
}





//3. Get Current Date in Various Formats
//
// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
//
console.log();
console.log(getDateTwoFormats());

function getDateTwoFormats() {
    const date = new Date();
    let MDY = date.toLocaleDateString('en-US');
    return MDY + ", " + MDY.replaceAll("/", "-");
}


// 4. Calculate Area of Triangle (Sides: 5, 6, 7)
//
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

// 5. Rotate String 'w3resource' Periodically
//
// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
