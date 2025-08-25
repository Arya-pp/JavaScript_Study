function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  this.calculate = function(str) {
    let [a, op, b] = str.split(" ");
    a = +a;
    b = +b;
    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7")); 

calc.addMethod("*", (a, b) => a * b);
console.log(calc.calculate("5 * 6"));
