const express = require("express");
const {
  getAllBooks,
  deleteBook,
  updateBook,
  addBook,
  markAsBorrowed,
  searchBooks,
} = require("../controllers");
const {
  updateBookSchema,
  createBookSchema,
  updateIsBorrowed,
} = require("../schemas/bookSchema");
const { validateBody } = require("../helpers");

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.get("/search", searchBooks);
booksRouter.delete("/:isbn", deleteBook);
booksRouter.put("/:isbn", validateBody(updateBookSchema), updateBook);
booksRouter.post("/", validateBody(createBookSchema), addBook);
booksRouter.patch(
  "/:isbn/borrow",
  validateBody(updateIsBorrowed),
  markAsBorrowed
);
module.exports = booksRouter;
