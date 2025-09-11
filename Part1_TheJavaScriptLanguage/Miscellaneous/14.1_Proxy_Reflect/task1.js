let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, value) {
      if (prop in target) {
        return Reflect.get(target, prop, value);
      } else {
        throw new ReferenceError(`Property doesn't exist: "${prop}"`)
      }
    }
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age);