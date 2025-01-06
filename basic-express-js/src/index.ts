import express, { Request, Response } from 'express';

const app = express();

/* 
  Middleware for intercepting the request
*/

app.use((req : Request , res : Response , next) => {
    console.log(`Request received: ${req.method} ${req.url}`)
    next();
});

app.get('/', (req : Request , res : Response , next) => {
    res.send("Hello , i am saiprabhu...")
});

app.get('/about', (req : Request , res : Response , next) => {
    res.json({ "name":"saiprabhu", "location": "Adilabad", "company": "Zemoso Technologies"});
});

app.get('/contact',(req : Request , res : Response)=>{
    res.send("Contact details: Adilabad");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000")
});