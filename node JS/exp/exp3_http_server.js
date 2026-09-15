const http = require('http');

const PORT = 3000;

const server = http.createServer((req,res) => {
    console.log(`request recived : ${req.method} ${req.url}`);

    res.statusCode = 200;
    res.setHeader('content-Type','text/plain');
    res.setHeader('X-Powered-By','Node.js');

    res.end('hello world');
});

server.listen(PORT,() => {
    console.log(`server running at http://localhost:${PORT}`);
});