//file system
const fs = require('fs');

fs.readFile('./test.txt', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data.toString());
})