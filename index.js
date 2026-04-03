const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const PORT = 8080;

const server = http.createServer((req, res) => {
    //res.writeHead(200, { 'Content-Type': 'text/html' });

    const uri = req.url;  //Variable for getting url route.
    let filePath = path.join(__dirname);

    //console.log(filePath);
    
    switch (uri) {
        case '/':
            filePath += "/index.html";
            sendFile(filePath);
            break;
        case '/about':
            filePath += "/about.html";
            sendFile(filePath);
            break;
        case '/contact-me':
            filePath += "/contact-me.html";
            sendFile(filePath);
            break;
        default:
            filePath += '/404.html';
            sendFile(filePath);
            break;
    }
    

    function sendFile(filePath) {
        fs.readFile(filePath, (err, data) => {
            if(err) {
                res.writeHead(500, { "Content-Type": 'text/plain'});
                res.end("Error Loading File!");

            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }

});


//Run the server
server.listen(PORT, 'localhost', () => {
  console.log('Listening on localhost:8080');
});