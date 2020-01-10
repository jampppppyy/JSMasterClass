function countdown(num) {
    if (num <= 0) {
        console.log('YAY ALL DONE!');
        return
    }
    console.log(num);
    num--;
    countdown(num)
}

console.log(countdown(3));