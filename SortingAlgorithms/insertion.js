function insertionSort(arr) {
    let sortedArray = [];
    sortedArray.push(arr[0])

    for (let i = 1; i < arr.length; i++) {
        for (let j = sortedArray.length; j > 0; j--) {
            if (arr[i] > sortedArray[j - 1]) {
                sortedArray.splice(j, 0, arr[i])
                break;
            }
        }
    }
    return sortedArray;
}

console.log(insertionSort([5, 4, 3, 1, 2]));
