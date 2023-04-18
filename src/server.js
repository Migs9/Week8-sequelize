require("dotenv").config()
const express = require("express");


const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({message: "App works"});
});

app.get("/healthtw2", (req, res) => {
    res.status(200).json({message: "App works YEP"});
});

app.listen(5001, () => console.log("Server knows you're here"));