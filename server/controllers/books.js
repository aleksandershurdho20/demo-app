const Books = require("../models/books");

const createBook = async(req,res) => {
    try {
        const newBook = await new Books(req.body).save();
        res.status(201).json(newBook);
    
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}

const getAllBooks = async(req,res) => {
    try {
        const books = await Books.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: err.message });

    }
}

const getBook = async(req,res) =>{
    try {
        const book = await Books.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: err.message });

    }
}

const updateBook = async(req,res) =>{
    const {id} = req.params
    try {
        const updatedBook = await Books.findByIdAndUpdate(
            id,
            req.body,
            { new: true } 
        );
        if (!updatedBook) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: err.message });

    }
}

const deleteBook = async(req,res) =>{
    try {
        const deletedBook = await Books.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
module.exports ={
    createBook,
    getAllBooks,
    getBook,
    updateBook,
    deleteBook
}