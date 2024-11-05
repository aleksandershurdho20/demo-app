const express = require("express")
const { createBook,getBook,getAllBooks,updateBook,deleteBook } = require("../controllers/books")

const router = express.Router()

router.post("/create",createBook)
router.get("/book/:id",  getBook)
router.get("/books",getAllBooks)
router.put("/book:id",updateBook)
router.delete("/book:id",deleteBook)
module.exports = router