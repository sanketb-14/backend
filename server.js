const http = require('http');

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome Sanket');

    }
    else if(url === '/home'){
        res.writeHead(200, { 'Content-Type': 'text/plain'})
        res.end("Welcome Home")
    }
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to About Us page');
    } else if (url === '/node') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to my Node Js project');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Not Found');
    }
})

server.listen(4000 , () => {
    console.log("server is running for sanket ");
})