let names = ["Alice", "Bob", "Aman", "David", "Arjun", "Riya"];
names.forEach(name => {
    if (name.startsWith('A')) {
        console.log(name);
    }
});

let aNames = names.filter(name => name.startsWith('A'));
console.log(aNames);
