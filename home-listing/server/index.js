//define the express module
const express = require('express');

//initial the express package
const app = express();

//define the get express request server
app.get('/', (req, res) => {
    res.send('Wellcome to Express');
});

//define the route
app.get('/api/listing', (req, res) => {
    res.send([{ id: 1, roomType: "Duplex" }, { id: 2, roomType: 'Flat' }]);
})

//export the server out put
app.listen(3000, () => console.log('Server is running on port 3000'));