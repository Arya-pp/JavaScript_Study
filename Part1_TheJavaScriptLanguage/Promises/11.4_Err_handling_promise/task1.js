new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!"); // use reject
  }, 1000);
}).catch(alert);
