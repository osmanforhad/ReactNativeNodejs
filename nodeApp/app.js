//define the http module
const http = require('http');

//create server
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Welcome to the http module');
        res.end();
    }
});

//export the server out put
server.listen(3000, () => {
    console.log('Web server is running on port 3000');
})