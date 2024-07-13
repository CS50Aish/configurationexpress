const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Application-level middleware
app.get("/", (req, res, next) => {
    console.log("Hello there");
    next();
}, (req, res) => {
    res.send(
    `<div>
        <h2>Expressjs - Application-level Middleware</h2>
    </div>`);
});

// Router-level middleware
const router = express.Router();

router.use((req, res, next) => {
    console.log("Router Level Middleware");
    next();
});

app.use('/routerlevelmiddleware', router);

// Error handling middleware
app.get('/errorhandlingmiddleware', (req, res, next) => {
    console.log("Hello error handling middleware");
    const err = new Error("This is an error");
    next(err);
}, (req, res) => {
    res.send(`<div><h2>Expressjs - Error Handling Middleware</h2></div>`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something Broke');
});


// Lets demonstrate third party middleware

const cookieParser = require('cookie-parser');

// Load cookies parsing middleware
console.log('Loading the third party middleware function')
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});