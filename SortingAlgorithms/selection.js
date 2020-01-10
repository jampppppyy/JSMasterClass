function selectionSort(arr) {
    let indexOfMin;
    for (let i = 0; i < arr.length; i++) {
        indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j;
            };
            if (j === arr.length - 1 && arr[i] !== arr[indexOfMin]) {
                let temp = arr[i];
                arr[i] = arr[indexOfMin];
                arr[indexOfMin] = temp;
            }
        }
    }
    return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));


// function selectionSort(arr) {
//     let min;
//     let indexOfMin;
//     for (let i = 0; i < arr.length; i++) {
//         min = arr[i];
//         for (let j = i + 1; j < arr.length; j++) {
//             if (min > arr[j]) {
//                 indexOfMin = j;
//                 min = arr[j]
//             };
//             if (j === arr.length - 1 && arr[i] !== min) {
//                 let temp = arr[i];
//                 arr[i] = min;
//                 arr[indexOfMin] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(selectionSort([5, 7, 8, 6, 4]));