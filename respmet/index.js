var express = require('express');
var app = express();
const PORT = 3000;

// Response express json method
// app.use(express.json())
// Response express text method
app.use(express.text());

app.post("/", function(req, res) {

    // Incase of json
    console.log("name", req.body.name);
    // Incase of text
    console.log(req.body);
    res.end();

});

app.listen(PORT, function(err){
    if(err){
        console.log(err);
    }
    console.log("Server is listening on port", PORT);
});