function readNumber() {
    let input;

    do {
        input = prompt("Enter a number please?", "");
        if (input === null || input.trim() === "") return null;
    } while (!isFinite(input));

    return +input;
}

alert(`Read: ${readNumber()}`);

//task4
let i = 0;
while (i != 10) {
  i += 0.2;
}