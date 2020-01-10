// const a = [1, 2, 3];
// const b = [1, 4, 9]

// O(n^2)
function frequencyCounterNaive(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (var item of arr1) {
        const currentIndex = arr2.indexOf(item ** 2)
        if (currentIndex === -1) return false;
        arr2.splice(currentIndex, 1);
    }
    return true;
}

//O(n)
function frequencyCounterRefactored(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let counter1 = {};
    let counter2 = {};

    //map two arrays into two objects
    for (let item of arr1) {
        counter1[item] = (counter1[item] || 0) + 1;
    }
    for (let item of arr2) {
        counter2[item] = (counter2[item] || 0) + 1;
    }

    //compare objects if it contains right frequency
    for (let key in counter1) {
        if (!(key ** 2 in counter2)) return false;

        if (counter2[key ** 2] !== counter1[key]) return false;
    }
    console.log(counter1);
    console.log(counter2);
    return true;
}

//O(n)
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let lookup = {};

    for (let char of str1) {
        lookup[char] = (lookup[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!lookup[char]) return false
        else {
            lookup[char] -= 1;
        }
    }
    return true;
}

console.log(validAnagram('azz', 'zaa'));
// console.log(frequencyCounter2(a, b))