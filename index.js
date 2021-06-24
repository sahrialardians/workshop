var express = require("express");
var app = express();
var PORT = process.env.PORT || 5000;

var Products = require("./product.json");

app.get('/', (req, res) => {
    res.send('Simple rest api');
});

app.listen(PORT, () => {
 console.log("Server running on " + PORT);
});

//GET all list
app.get("/products", (req, res) => {
    res.json(Products);
});

//GET detail by id
app.get("/product/:id", (req, res) => {
    res.json(Products.find((product) => {
        return req.params.id == product.id
    }))  
});