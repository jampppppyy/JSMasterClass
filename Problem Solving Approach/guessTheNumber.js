// Write a JavaScript program where the program takes a random integer
// between 1 to 10, the user is then prompted to input a guess number.
//  If the user input matches with guess number, the program
//  will display a message "Good Work" otherwise display a message "Not matched".

function guessTheNumber(inputNum) {
    let message;
    // check of the number is positive value
    if (inputNum > 0) {
        // generate a random number with the range of 1 - 10
        const randomNum = Math.round(Math.random() * 2)
        console.log('randomNum: ', randomNum);
        // compare the inputNum is === in the Random number
        if (inputNum === randomNum) {
            message = "Good Work"
        } else {
            message = "Not Match"
        }
    }
    // return <string> based on the result of compare
    return message;
}


console.log(guessTheNumber(2));