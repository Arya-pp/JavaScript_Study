function throttle(func, ms) {
  let isThrottled = false,
      savedArgs,
      savedThis;

  function wrapper(...args) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(this, args); 
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs); 
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

function f(a) {
  console.log(a);
}

let f1000 = throttle(f, 1000);

f1000(1); 
f1000(2); 
f1000(3);

