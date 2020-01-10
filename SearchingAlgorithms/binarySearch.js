function binarySearch(arr, searchItem) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] < searchItem) left = middle + 1;
        else if (arr[middle] > searchItem) right = middle - 1;
        else return middle;
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));