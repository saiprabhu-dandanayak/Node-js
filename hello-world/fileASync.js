// Import the 'fs' module
const fs = require('fs');

// File path
const filePath = './example.txt';

fs.writeFile(filePath, 'Hello, this is a sample text file!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File created and data written successfully.');
    }
});


fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:');
        console.log(data);
    }
});



// 3. Delete the file (asynchronous)
fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully.');
    }
});

