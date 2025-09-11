let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop) {
        if (typeof prop === "string" && !isNaN(prop)) {
            let index = Number(prop);

            if (index < 0) {
                return target[target.length + index];
            }
        }
        return target[prop];
    }
});

alert( array[-1] ); 
alert( array[-2] ); 
alert( array[0] );