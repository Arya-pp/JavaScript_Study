let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
let key;

for(key in salaries){
    sum += salaries[key];
}
alert(sum);