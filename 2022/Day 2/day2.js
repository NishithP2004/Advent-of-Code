const fs = require('fs');

var input = fs.readFileSync('input.txt', 'utf-8').split(/\n/);
var arr = [];

input.forEach(shapes => {
    let shape = shapes.trim();
    let A = shape[0], B = shape[2];
    let value = (B == 'X')? 1: (B == 'Y')? 2: 3;
    let sum = 0;

    if(A == 'A' && B == 'X') 
        sum += value + 3;
    else if(A == 'A' && B == 'Y')
        sum += value + 6;
    else if(A == 'A' && B == 'Z')
        sum += value + 0;
    else if(A == 'B' && B == 'X') 
        sum += value + 0;
    else if(A == 'B' && B == 'Y')
        sum += value + 3;
    else if(A == 'B' && B == 'Z')
        sum += value + 6;
    else if(A == 'C' && B == 'X') 
        sum += value + 6;
    else if(A == 'C' && B == 'Y')
        sum += value + 0;
    else if(A == 'C' && B == 'Z')
        sum += value + 3;

    arr.push(sum);
})

let total = arr.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue, 10)
}, 0);

// Part 1
console.log("Part 1: ", total);

arr = [];
input.forEach(shapes => {
    let shape = shapes.trim();
    let A = shape[0], B = shape[2];
    let sum = 0;

    if(A == 'A' && B == 'X') 
        sum += 3 + 0;
    else if(A == 'A' && B == 'Y')
        sum += 1 + 3;
    else if(A == 'A' && B == 'Z')
        sum += 2 + 6;
    else if(A == 'B' && B == 'X') 
        sum += 1 + 0;
    else if(A == 'B' && B == 'Y')
        sum += 2 + 3;
    else if(A == 'B' && B == 'Z')
        sum += 3 + 6;
    else if(A == 'C' && B == 'X') 
        sum += 2 + 0;
    else if(A == 'C' && B == 'Y')
        sum += 3 + 3;
    else if(A == 'C' && B == 'Z')
        sum += 1 + 6;
    
    arr.push(sum);
})

total = arr.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue, 10)
}, 0);

// Part 2
console.log("Part 2: ", total);