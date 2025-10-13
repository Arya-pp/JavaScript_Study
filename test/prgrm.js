function closure() {
    let count = 0;
    return function () {
        return count ++;  
    } 
}

let counter = closure();
console.log(counter());
console.log(counter());
console.log(counter());

