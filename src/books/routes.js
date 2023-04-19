const { Router } = require("express");
const bookRouter = Router();

const { getBook, addBook, updateBook, deleteBook, getBookByTitle } = require("./controllers");

// - - - - - - - - -  Basic 4 requests - - - - - - - - - - - - - - - - - - - - - 

bookRouter.post("/books/addbook", addBook);

bookRouter.get("/books/getallbooks", getBook);

// bookRouter.put("/books/updatebook", updateBook);

bookRouter.delete("/books/deletebook", deleteBook);

// - - - - - -  GET book by title - - - - - - - - - - - - - - - - - - - - - - - - 

bookRouter.get("/books/getbook/:title", getBookByTitle);

// - - - - - -  PUT dynamic updates - - - - - - - - - - - - - - - - - - - - - - - -

bookRouter.put("/books/updatebook/:title", updateBook);


module.exports = bookRouter;