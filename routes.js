const fs = require('fs');
const path = require('path');

const requestHandler = ((req, res) => {
    const url = req.url
    const method = req.method
    const filePath = path.join(__dirname, "message.txt")
    if (url === '/') {
        fs.readFile(filePath, 'utf8', (err, data) => {
            let formValue = data || "undefined"
            if (err) {
                console.error(err)
                return res.end()
            }
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(`
  <html>
    <head><title>Enter Message</title></head>
    <body>
      <p>${formValue}</p>
      <form action="/message" method="POST">
        <input type="text" name="message" >
        <button type="submit">Send</button>
      </form>
    </body>
  </html>
`)
            res.end();

        })


    }
    if (url === "/message" && method === "POST") {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile(filePath, message, (err) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.write('Internal Server Error');
                    return res.end();
                } else {
                    res.writeHead(302, { 'Location': '/' });
                    return res.end();
                }
            });

        })
    }
})

module.exports = requestHandler