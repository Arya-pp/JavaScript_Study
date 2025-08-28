function sum(a) {
    return function sum(b) {
        return a + b;
    }
}

console.log(sum(1)(2));
console.log(sum(5)(-1));