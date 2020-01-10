function stringSearch(string, subString) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < subString.length; j++) {
            if (string[i + j] !== subString[j]) break;
            else if (j === subString.length - 1) count++;
        }
    }
    return count;
}

console.log(stringSearch('lorie loled', 'lol'));