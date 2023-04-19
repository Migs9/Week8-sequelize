require("dotenv").config()
const express = require("express");

const Book = require("./books/model");
const Author = require("./authors/model")

const bookRouter = require("./books/routes")
const authorRouter = require("./authors/routes")

const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());

const syncTables = () => {
    Book.sync();
    Author.sync();
};

app.use(bookRouter);
app.use(authorRouter);

app.get("/health", (req, res) => {
    res.status(200).json({message: "App works"});
});


app.listen(port, () => {
    syncTables()
    console.log("Server knows you're here")
});