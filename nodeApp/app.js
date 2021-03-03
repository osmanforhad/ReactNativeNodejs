//define the http module
const http = require('http');

//create server
const server = http.createServer((req, res) => {

    //defien an array
    const movies = [
        { id: 1, name: 'Titanic' },
        { id: 2, name: 'Early Bird' }
    ]

    if (req.url == '/') {
        res.write('Welcome to the http module');
        res.end();
    }

    //setup the routes
    if (req.url == '/api/movies') {
        res.write(JSON.stringify(movies));
        res.end();
    }
});

//export the server out put
server.listen(3000, () => {
    console.log('Web server is running on port 3000');
})