const { Router } = require("express");
const bookRouter = Router();

const { getBook, addBook, updateBook } = require("./controllers");

bookRouter.get("/books/getallbooks", getBook);

bookRouter.post("/books/addbook", addBook);

bookRouter.put("/books/updatebook", updateBook);



module.exports = bookRouter;