const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} - Request received for ${req.url}\n`;

    // Log the request to the log file
    fs.appendFile('./log.txt', log, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
            res.end('Internal Server Error');
            return;
        }

        // Handle different routes using a switch case
        switch (req.url) {
            case '/':
                res.end('Hello from the home page!');
                break;

            case '/about':
                res.end('This is saiprabhu , currently i am learning node js.');
                break;

            case '/contact':
                res.end('Contact me at saiprabhu@gmail.com.');
                break;

            default:
                res.end('404 Not Found');
                break;
        }
    });
});

myServer.listen(8002, () => {
    console.log('Server started on port 8002');
});
