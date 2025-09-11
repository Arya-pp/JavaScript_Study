function makeObservable(target) {
  let handlers = [];
  
  target.observe = function(handler) {
    handlers.push(handler);
  };

  return new Proxy(target, {
    set(target, prop, value, receiver) {
      let success = Reflect.set(target, prop, value, receiver); 
      if (success) {
        handlers.forEach(handler => handler(prop, value)); 
      }
      return success;
    }
  });
}


let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John";