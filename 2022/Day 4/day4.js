const fs = require('fs');

var input = fs.readFileSync('input.txt', 'utf-8').split(/\n/);
var ctr = 0, ctr2=0;

input.forEach(pair => {
    let sections = pair.split(",");
    let pairA = sections[0].split("-");
    let pairB = sections[1].split("-");
    
    let a = parseInt(pairA[0]),
        b = parseInt(pairA[1]),
        c = parseInt(pairB[0]),
        d = parseInt(pairB[1]);

    if(Math.abs(a -b) > Math.abs(c - d)) {
        if(c >= a && d <= b) 
            ctr++;
    } else {
        if(a >= c && b <= d) 
            ctr++;
    }

    for(let i=a;i<=b;i++) {
        for(let j=c;j<=d;j++) {
            if(i == j) {
                ctr2++;
                i = b;
                break;
            } else {
                continue;
            }
        }
    }
});

// Part 1
console.log("Part 1:", ctr);

// Part 2
console.log("Part 2:", ctr2);