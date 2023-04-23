const Genre = require("./model")
const Book = require("../books/model");

const addGenre = async(req, res) => {
    try {
        const genre = await Genre.create ({
            genre: req.body.genre,
        });
        res.status(201).json({ message:"success", genre: genre});
    } catch (error) {
        console.log(error);
    }
};
const getAllBooks = async (req, res) => {
    try {
        const genre = await Genre.findOne ({
            where: {genre: req.params.genre},
            include: Book,
        });
        res.status(200).json({ message:"success", genre: genre}); 
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addGenre,
    getAllBooks,
};