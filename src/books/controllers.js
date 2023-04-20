const Book = require("./model")

const addBook = async(req, res) => {
    try {
        const book = await Book.create ({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            AuthorId: req.body.AuthorId,
            GenreId: req.body.GenreId,
        });
        res.status(201).json({ message:"success", book: book});
    } catch (error) {
        console.log(error);
    }
};


const getBook = async (req, res) => {
    try {
        const book = await Book.findAll ();
        res.status(200).json({ message:"success", book: book}); 
    } catch (error) {
        console.log(error);
    }
};

// const updateBook = async (req, res) => {
//     try {
//         const updateBook = await Book.update (
//             {author: req.body.newAuthor},
//             {where: {title:req.body.title}},
//             { new: true }
//         );
//         res.status(201).json({ message:"success", updateResult: updateBook}); 
//     } catch (error) {
//         console.log(error);
//     }
// };

const deleteBook = async (req, res) => {
    try {
        const { title } = req.body; // why not move this into the where clause?

        const book = await Book.destroy ({
            where: {
                title: title,
            }
        });

        res.status(201).json({ message:"success", result: book}); 
    } catch (error) {
        console.log(error);
    }
}

// GET by title - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

const getBookByTitle = async (req, res) => {
    try {
        const book = await Book.findOne (
            {where: {title: req.params.title}}
        );
        res.status(200).json({ message:"success", book: book}); 
    } catch (error) {
        console.log(error);
    }
};

// Dynamic PUT - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

const updateBook = async (req, res) => {
    try {
        const updateBook = await Book.update (
            { [req.body.field]: req.body.value },
            {where: {title:req.params.title}},
            { new: true }
        );
        res.status(201).json({ message:"success", updateResult: updateBook}); 
    } catch (error) {
        console.log(error);
    }
};

// Delete All - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

const deleteAllBooks = async (req, res) => {
    try {
        const book = await Book.destroy ({
            where: {}  
        });
        res.status(201).json({ message:"success", result: book}); 
    } catch (error) {
        console.log(error);
    }
};





module.exports = {
    addBook,
    getBook,
    updateBook,
    deleteBook,
    getBookByTitle,
    deleteAllBooks,
};