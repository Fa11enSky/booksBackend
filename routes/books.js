const express = require('express')
const { getAllBooks, deleteBook, updateBook, addBook } = require('../controllers')
const validateBody = require('../helpers/validateBody')
const { updateBookSchema, createBookSchema } = require('../schemas/bookSchema')

const booksRouter = express.Router()


booksRouter.get('/', getAllBooks)
booksRouter.delete('/:isbn', deleteBook)
booksRouter.put('/:isbn', validateBody(updateBookSchema), updateBook)
booksRouter.post('/',validateBody(createBookSchema),addBook)
module.exports = booksRouter