function bubbleSort(arr) {
    let temp;
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1]
                arr[j + 1] = arr[j];
                arr[j] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) return arr;
    }
    return arr;
}

console.log(bubbleSort([3, 1, 4, 2]));