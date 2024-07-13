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

// Lets demonstrate router level middleware
const router = express.Router();

router.use((req, res, next) => {
    console.log("Router Level Middleware");
    next();
});

app.use('/routerlevelmiddleware', router);

// Lets demonstrate error handling middleware
app.get('/errorhandlingmiddleware', (req, res, next) => {
    console.log("Hello error handling middleware");
    next(err);
}, (req, res) => {
    res.send(`<div><h2>Expressjs - Error Handling Middleware</h2></div>`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something Broke');
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
