const express = require('express')
const { getAllBooks, deleteBook } = require('../controllers')

const booksRouter = express.Router()


booksRouter.get('/', getAllBooks)
booksRouter.delete('/:isbn',deleteBook)
module.exports = booksRouter