function Rabbit(name) {
    this.name = name;
}

let rabbit = new Rabbit("Black");
let rabbit2 = new rabbit.constructor("White");

console.log(rabbit.name);
console.log(rabbit2.name);
