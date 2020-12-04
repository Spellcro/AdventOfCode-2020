var { adamData } = require('./AdamData.js');

let failedPasswords = 0;
let splitPasswords = adamData.map((val) => val.split(' '));

// Remove colons from the split password arrays
splitPasswords.forEach((split) => (split[1] = split[1].substring(0, 1)));

splitPasswords.forEach((pass) => {
    let bounds = pass[0].split('-');
    let lowerLimit = Number(bounds[0]);
    let upperLimit = Number(bounds[1]);

    let matchedCount = 0;
    let arr2Array = pass[2].split('');
    let loop = true;

    while (loop) {
        let letterMatchIndex = arr2Array.indexOf(pass[1]);
        if (letterMatchIndex >= 0) {
            arr2Array.splice(letterMatchIndex, 1);
            matchedCount += 1;
        } else {
            loop = false;
        }
    }
    if (matchedCount < lowerLimit || matchedCount > upperLimit) {
        failedPasswords += 1;
    }
});
console.log(adamData.length() - failedPasswords);
