const Author = require("./model")
const Book = require("../books/model");

const getAuthor = async (req, res) => {
    try {
        const author = await Author.findOne ({
            where: {authorname: req.params.authorname},
            include: Book,
        },            
            // console.log(req.params) // to test
        );
        res.status(200).json({ message:"success", author: author}); 
    } catch (error) {
        console.log(error);
    }
};

const addAuthor = async(req, res) => {
    try {
        const author = await Author.create ({
            authorName: req.body.authorName,
        });
        res.status(201).json({ message:"success", author: author});
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addAuthor,
    getAuthor,
};