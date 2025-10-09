// find squares
let arr = [1,2,3,4,5,6,7,8,9,10];
let squares = arr.map(num => (num * num));
console.log(squares);

// even number
let even = arr.filter(num => (num % 2 === 0));
console.log(even);

// sum of numbers
let sum = arr.reduce((a, b) => a + b, 0);
console.log("sum = " + sum);

// max value in array
let maxValue = arr.reduce((x, y) => { 
    return x > y ? x : y;
});
console.log("maximum value : " + maxValue);

// number to string
let stringArr = arr.map(num => num.toString());
console.log(stringArr);

// average of array
let average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
console.log("Avg : " + average);

// check if all numbers are positive
let nums = arr.every(num => num > 0);
console.log("All numbers are positive numbers :", nums);

// Check if the array contains any number > 8
let hasLarge = arr.some(num => num > 8);
console.log("contains num > 8 :" , hasLarge);

// concatenation 
let array = [[1,2], [3,4], [5,6]];
let flattened = array.flat();
console.log(flattened);

// sorting of array in descending order
let numbers = [10, 3, 25, 7, 18];
let sortedDesc = numbers.sort((a, b) => b - a);
console.log(sortedDesc);

// reverse of an array
let reverse = [];
for (let i = arr.length - 1; i >= 0; i--){
    reverse.push(arr[i]);
}
console.log(reverse);


