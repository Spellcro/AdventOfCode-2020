var { adamData } = require('./AdamData.js');

// Part 1
adamData.forEach((num, index) => {
    let loc = adamData.indexOf(2020 - num);
    if (loc >= 0) {
        console.log(`Solution found! Numbers ${num} and ${adamData[loc]} sum to 2020 and multiply to give ${num * adamData[loc]}`);
    }
});

// Part 2
adamData.forEach((num) => {
    adamData.forEach((val) => {
        let loc = adamData.indexOf(2020 - (num + val));
        if (loc >= 0) {
            console.log(`Solution found! Numbers ${num}, ${val} and ${adamData[loc]} sum to 2020 and multiply to give ${num * val * adamData[loc]}`);
        }
    });
});