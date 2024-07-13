const express = require('express');
const res = require('express/lib/response');
const app = express();

// Request Query
app.get("/request-query", (req, res) => {
    console.log(req.query);
    return res.join({
        "message": "Request Query",
        "title": req.query.title
    });
});

// Request Params 
app.get('/:id', function(req, res){
    console.log(req.params['id']);
    res.send();
});

// Request Headers and Request Get Parameters
app.get("/", function(req, res){
    // Before res.send()
    console.log("Request Headers => " + req.headers);
    console.log("Request URL => " + req.url);
    console.log("Request IP => " + req.ip);
    console.log("Request Protocol => " + req.headers);
    // Before res.send()
    console.log("Before => " + res.headersSent);
    res.send('Ok');
    // After res.send()
    console.log("After => " + res.headersSent);
});

// Listening 
app.listen(3000, err => {
    if(err){
        console.log("There was a problem", err);
        return;
    }
    console.log("Listening on port 3000");
});

