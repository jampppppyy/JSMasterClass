function addToN(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total = total + i
    }
    return total;
}

function another(n) {
    return n * (n + 1) / 2;
}

const num = 6;
console.log(addToN(num))
console.log(another(num))