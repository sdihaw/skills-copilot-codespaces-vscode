// Create web server
// 1. Load the http module
var http = require('http');

// 2. Create a server
http.createServer(function (req, res) {
    // 3. Set the HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // 4. Send the response body "Hello World"
    res.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://localhost:3000/');

// 5. Run the server using the command node comments.js
// 6. Go to the browser and type http://localhost:3000/ to see the output "Hello World"
// 7. To stop the server, press Ctrl + C in the terminal
