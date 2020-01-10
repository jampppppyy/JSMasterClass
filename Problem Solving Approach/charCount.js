function charCount(string) {
    // define output variable
    let result = {};
    // traverse all characters 
    for (var char of string) {
        //disregard capitalize or not
        char = char.toLowerCase();
        // disregard special characters
        if (/[a-z0-9]/.test(char)) {
            // if char is in object, +1 to value or initialize to 1
            result[char] = ++result[char] || 1;
        }
    }
    //return output
    return result;
}

const sampleString = "Hello hi@!"
console.log(charCount(sampleString));
