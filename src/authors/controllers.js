const Author = require("./model")

const getAuthor = async (req, res) => {
    try {
        const author = await Author.findAll (
            {where: {name: req.params.authorname}}
        );
        res.status(200).json({ message:"Here's the available data", book: author}); 
    } catch (error) {
        console.log(error);
    }
};

const addAuthor = async(req, res) => {
    try {
        const author = await Author.create ({
            name: req.body.name,
            book: req.body.book,
        });
        res.status(201).json({ message:"Entry successfully submitted", book: author});
    } catch (error) {
        console.log(error);
    }
};

// - - - - - - - - - - - - - - - NOT NEEDED AT THIS POINT - - - - - - - - - - - - - - - - - - - - - - - - - 

// const updateBook = async (req, res) => {
//     try {
//         const updateBook = await Book.update (
//             {author: req.body.newAuthor},
//             {where: {title:req.body.title}},
//         );
//         res.status(201).json({ message:"Record Updated", updateResult: updateBook}); 
//     } catch (error) {
//         console.log(error);
//     }
// };

// const deleteBook = async (req, res) => {
//     try {
//         const { title } = req.body; // why not move this into the where clause?

//         const book = await Book.destroy ({
//             where: {
//                 title: title,
//             }
//         });

//         res.status(201).json({ message:"Record Deleted", result: book}); 
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports = {
    addAuthor,
    getAuthor,
    // updateBook,
    // deleteBook,
};