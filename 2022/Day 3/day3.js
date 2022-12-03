const fs = require('fs');

var input = fs.readFileSync('input.txt', 'utf-8').split(/\n/);
var arr = [], sum = 0;

function getCommonChar(str1, str2, str3) {
    let common = "";

    if (str3 == undefined) {
        for (let i = 0; i < str1.length; i++)
            if (str2.indexOf(str1[i]) != -1) {
                common = str1[i];
                break;
            } else {
                continue;
            }
    } else {
        for (let i = 0; i < str1.length; i++)
            if (str2.indexOf(str1[i]) != -1 && str3.indexOf(str1[i]) != -1) {
                common = str1[i];
                break;
            } else {
                continue;
            }
    }

    return common;
}

input.forEach(contents => {
    let content = contents.trim();
    let firstHalf = content.substring(0, content.length / 2),
        secondHalf = content.substring(content.length / 2);
    let common = getCommonChar(firstHalf, secondHalf);
    arr.push(common);
})

function getSum(arr) {
    let sum = 0;
    
    arr.forEach(type => {
        if (type >= 'a' && type <= 'z')
            sum += type.charCodeAt(0) - 96;
        else
            sum += type.charCodeAt(0) - 64 + 26;
    })

    return sum
}

sum = getSum(arr);

// Part 1
console.log("Part 1: ", sum);

arr = [];

for (let i = 0; i < input.length; i += 3) {
    let str1 = input[i],
        str2 = input[i+1],
        str3 = input[i+2];
    let common = getCommonChar(str1, str2, str3);
    arr.push(common);
}

sum = getSum(arr);

// Part 2
console.log("Part 2: ", sum);