let user = {
  name: "John Smith",
  age: 35
};

let result = JSON.parse(JSON.stringify(user));

console.log(result);
