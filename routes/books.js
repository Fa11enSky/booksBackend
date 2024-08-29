const express = require('express')
const { getAllBooks, deleteBook, updateBook } = require('../controllers')
const validateBody = require('../helpers/validateBody')
const { updateBookSchema } = require('../schemas/bookSchema')

const booksRouter = express.Router()


booksRouter.get('/', getAllBooks)
booksRouter.delete('/:isbn', deleteBook)
booksRouter.put('/:isbn',validateBody(updateBookSchema),updateBook)
module.exports = booksRouter