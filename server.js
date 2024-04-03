const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200 , {
        contentType: 'text/plain'
    })
    res.end("Hello sanket")
})

server.listen(4000 , () => {
    console.log("server is running for sanket ");
})