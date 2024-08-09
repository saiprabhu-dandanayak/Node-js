// Import the 'fs' module
const fs = require('fs');

// File path
const filePath = './example.txt';

// 1. Create a new file and write data to it (synchronous)
try {
    fs.writeFileSync(filePath, 'Hello, this is a sample text file!');
    console.log('File created and data written successfully.');
} catch (err) {
    console.error('Error writing file:', err);
}

// 2. Read the file content (synchronous)
try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('File content:');
    console.log(data);
} catch (err) {
    console.error('Error reading file:', err);
}

// 3. Delete the file (asynchronous)
 try {
        fs.unlinkSync(filePath);
        console.log('File deleted successfully.');
    } catch (err) {
        console.error('Error deleting file:', err);
    }
