const nums = [-4, -3, -2, -1, 0, 1, 5, 10]
const nums2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
const nums3 = [1, 2, 2, 2, 2, 5, 7, 7, 99];

function sumZeroNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
    return null;
}

function sumZeroRefactored(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]]
        else if (sum > 0) right--;
        else if (sum < 0) left++;
    }
    return null;
}

function countUniqueValuesOwn(arr) {
    let lookup = {};
    for (let item of arr) {
        lookup[item] = (lookup[item] || 0) + 1;
    }
    return Object.keys(lookup).length;
}

function countUniqueValuesNotOwn(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}


console.log(countUniqueValuesNotOwn(nums3));