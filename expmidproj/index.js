// Lets demonstrate application level middleware
const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res, next) => {
    console.log("Hello there");
    next();
}, (req, res) => {
    res.send(
    `<div>
        <h2>Expressjs - Application-level Middleware</h2>
    </div>`);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});