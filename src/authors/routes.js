const { Router } = require("express");
const authorRouter = Router();

const { getAuthor, addAuthor } = require("./controllers");

authorRouter.post("/authors/addauthor", addAuthor);

authorRouter.get("/authors/getauthorandbooks/:authorname", getAuthor);

module.exports = authorRouter;