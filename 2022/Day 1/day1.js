const fs = require('fs');

var input = fs.readFileSync('input.txt', 'utf-8').split(/\n\s/);
var arr = [];

input.forEach(calories => {
    let calorie = calories.trim().split(/\n/);

    let sum = calorie.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue, 10)
    }, 0)
    arr.push(sum);
})

arr.sort((a, b) => b-a)

// Part 1
console.log(arr[0])
// Part 2
console.log(arr[0] + arr[1] + arr[2])