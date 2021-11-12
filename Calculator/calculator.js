const express = require("express");
const bodyParser = require("body-parser"); //for handling inputs from the form

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function(req, res) {
    res.send("Result of the calculation is " + ((Number)(req.body.weight) / (Number)(Math.pow((req.body.height), 2))));
})

app.listen(3000, function() {
    console.log("I am started");
})