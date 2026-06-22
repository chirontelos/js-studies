const prompt = require('prompt-sync')();

let option;
//Menu
function menu() {
    console.log(`
         choose a function to run:
         [1] getDayAndTime
         [2] getDateTwoFormats
         [3]
         [4] rotateString
         [5] exit program`);

    const input = prompt('option: ');

    return parseInt(input);
}

do {
    option = menu();

    switch (option) {
        case 1:
            console.log(getDayAndTime());
            break;
        case 2:
            console.log(getDateTwoFormats());
            break;
        case 3:

            break;
        case 4:
            console.log(rotateString());

            break;

        default:
            break;
    }

} while (option !== 5);

//1. display current day and time
//Write a JavaScript program to display the current day and time in the following format. 
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38
//
//Printar na tela dia e hora

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

function getDateTwoFormats() {
    const date = new Date();
    let MDY = date.toLocaleDateString('en-US');

    let day = MDY.substring(2, 4);
    let month = MDY.substring(0, 1);

    let MDYTwo = MDY.split("/");;

    MDYTwo[0] = day;
    MDYTwo[1] = month;

    MDYTwo = MDYTwo.join("/");


    return MDY + ", " + MDY.replaceAll("/", "-") + ", " + MDYTwo + ", " + MDYTwo.replaceAll("/", "-");
}


// 4. Calculate Area of Triangle (Sides: 5, 6, 7)
//
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

// function triangleArea() {
//
//
// }

// 5. Rotate String 'w3resource' Periodically
//
// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

function rotateString() {
    //if this function where interactive I could put a string parameter and use strArr = [...Arr]; to pass to array. Maybe do this on browser version if will be any.
    let string = "five";

    let strArr = [...string];

    //rotates the word by the string length -1 times.
    for (let i = 0; i < string.length - 1; i++) {
        let l = strArr.pop();
        strArr.unshift(l);

    }

    return strArr.join("");
}
