function linearSearch(arr, searchItem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchItem) return i + 1;
    }
    return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 8));