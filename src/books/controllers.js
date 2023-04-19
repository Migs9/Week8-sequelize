const Book = require("./model")

const getBook = async (req, res) => {
    try {
        const book = await Book.findAll ();
        res.status(200).json({ message:"Here's the available data", book: book}); 
    } catch (error) {
        console.log(error);
    }
};

const addBook = async(req, res) => {
    try {
        const book = await Book.create ({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
        });
        res.status(201).json({ message:"Entry successfully submitted", book: book});
    } catch (error) {
        console.log(error);
    }
};


const updateBook = async (req, res) => {
    try {
        const updateBook = await Book.update (
            {author: req.body.newAuthor},
            {where: {title:req.body.title}},
        );
        res.status(201).json({ message:"Record Updated", updateResult: updateBook}); 
    } catch (error) {
        console.log(error);
    }
};



module.exports = {
    addBook,
    getBook,
    updateBook,
};