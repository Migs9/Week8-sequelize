const { Router } = require("express");
const authorRouter = Router();

const { getAuthor, addAuthor, updateBook, deleteBook } = require("./controllers");

authorRouter.post("/authors/addauthor", addAuthor);

authorRouter.get("/authors/getauthorandbooks/:authorname", getAuthor);

// authorRouter.put("/authors/updatebook", updateBook);

// authorRouter.delete("/authors/deletebook", deleteBook);


module.exports = authorRouter;