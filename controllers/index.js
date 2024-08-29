const { controllerWrapper } = require("../helpers");
const addBook = require("./books/addBook");
const deleteBook = require("./books/deleteBook");
const getAllBooks = require("./books/getAllBooks");
const markAsBorrowed = require("./books/markAsBorrowed");
const updateBook = require("./books/updateBook");

module.exports = {
  addBook: controllerWrapper(addBook),
  deleteBook: controllerWrapper(deleteBook),
  getAllBooks: controllerWrapper(getAllBooks),
  markAsBorrowed: controllerWrapper(markAsBorrowed),
  updateBook: controllerWrapper(updateBook),
};
