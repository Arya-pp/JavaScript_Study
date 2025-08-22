function sumInput() {
    let arr = [];

    while (true) {
        let number = prompt("Enter a number", "");

        if (number === "" || number === null || !isFinite(number)) break;

        arr.push(+number);
    }
    
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
}

alert(sumInput());