const arr1 = [1, 2, 5, 2, 8, 1, 5]
const arr2 = [2, 6, 9, 2, 1, 8, 5, 6, 3]

function maxSubArraySumNaive(arr, limit) {
    if (limit > arr.length) return null;
    let max = -Infinity;
    for (let i = 0; i < arr.length - limit + 1; i++) {
        let temp = 0;
        for (let j = 0; j < limit; j++) {
            temp += arr[i + j];
        }
        if (temp > max) max = temp;
        console.log(temp, max);
    }
    return max;
}

function maxSubArraySumRefactored(arr, limit) {
    if (arr.length < limit) return null;

    let tempSum = 0;
    let maxSum = 0;

    for (let i = 0; i < limit; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = limit; i < arr.length; i++) {
        tempSum = tempSum - arr[i - limit] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubArraySumRefactored(arr2, 3));
