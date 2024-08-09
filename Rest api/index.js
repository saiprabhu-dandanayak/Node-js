const express = require("express");
const fs = require('fs');
const path = require('path');

const app = express();
const mockDataPath = path.join(__dirname, 'mockdata.json');

// Load users from mockdata.json
let users = JSON.parse(fs.readFileSync(mockDataPath, 'utf8'));

// Middleware to parse JSON request bodies
app.use(express.json());

// Get all users (GET)
app.get("/api/v1/users", (req, res) => {
    res.json(users);
});

// Get user by ID (GET)
app.get('/api/v1/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Create a new user (POST)
app.post('/api/v1/users', (req, res) => {
    const newUser = req.body;
    const userId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const userWithId = { ...newUser, id: userId };

    users.push(userWithId);

    // Write updated users array to mockdata.json
    fs.writeFile(mockDataPath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error saving user data' });
        }
        res.status(201).json(userWithId);
    });
});

// Update user by ID (PUT)
app.put('/api/v1/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedUser = req.body;
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex !== -1) {
        users[userIndex] = { ...updatedUser, id: id };

        // Write updated users array to mockdata.json
        fs.writeFile(mockDataPath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error updating user data' });
            }
            res.json(users[userIndex]);
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Partially update user by ID (PATCH)
app.patch('/api/v1/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updates = req.body;
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updates };

        // Write updated users array to mockdata.json
        fs.writeFile(mockDataPath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error updating user data' });
            }
            res.json(users[userIndex]);
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Delete user by ID (DELETE)
app.delete('/api/v1/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1)[0];

        // Write updated users array to mockdata.json
        fs.writeFile(mockDataPath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error deleting user data' });
            }
            res.json(deletedUser);
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Delete all users (DELETE)
app.delete('/api/v1/users', (req, res) => {
    users = []; // Clear the array

    // Write empty users array to mockdata.json
    fs.writeFile(mockDataPath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting users' });
        }
        res.status(204).send(); // No content
    });
});

app.listen(3000, () => {
    console.log("Server started and running on port 3000...");
});
