const express = require('express');

const app = express();

// Home page
app.get("/", (req, res) => {
    res.send("Hi, This is the Home page, welcome dude :)");
});

// About page
app.get("/about", (req, res) => {
    res.send("Hi, This is Saiprabhu. I am currently learning Node.js.");
});

// Contact page
app.get("/contact", (req, res) => {
    res.send("You can reach me at dandanayaksaiprabhu365@gmail.com.");
});

// Services page
app.get("/services", (req, res) => {
    res.send("I offer full-stack development services, specializing in React and Spring Boot.");
});

// Portfolio page
app.get("/portfolio", (req, res) => {
    res.send("Check out my portfolio: https://my-portfolio.example.com");
});

// Blog page
app.get("/blog", (req, res) => {
    res.send("Welcome to my blog! Stay tuned for more posts about tech and coding.");
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
