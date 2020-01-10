function collectAllOdds(arr) {
    let result = [];

    function helperRecursion(item) {
        if (item.length === 0) return;
        if (item[0] % 2 !== 0) {
            result.push(item[0]);
        }
        helperRecursion(item.slice(1))
    }

    helperRecursion(arr);
    return result;
}

console.log(collectAllOdds([1, 2, 3, 4, 5, 7, 9, 10, 12]));