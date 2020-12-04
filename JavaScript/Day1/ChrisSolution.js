var { chrisData } = require('./ChrisData.js');
d = chrisData;//.sort((a, b) => a - b);

// Part1
var i = -1, j = -1; while (j < 0) { i++; j = d.indexOf(2020 - d[i]); } console.log(d[i] * d[j]);

d.forEach(n => { var r = d.indexOf(2020 - n); ~r && console.log(d[r] * n); });

d.forEach(n => { d.forEach(m => { m + n == 2020 && console.log(m * n) }) });