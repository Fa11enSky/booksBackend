const fs = require("fs/promises");

const getBooksList = require("./getBooksListSrv");
const bookPath = require("./booksPath");
const { errorsCreator } = require("../helpers");

const markAsBorrowedSrv = async (isbn, isBorrowed) => {
  const books = await getBooksList();
  if (!books) {
    throw errorsCreator(500, "Read db error");
  }

  const idx = books.findIndex((el) => el.isbn === isbn);
  if (idx === -1) {
    throw errorsCreator(404, "Book not found");
  }

  books[idx].isBorrowed = isBorrowed;

  try {
    await fs.writeFile(bookPath, JSON.stringify(books, null, 2));
    return books[idx];
  } catch (error) {
    console.log(error);
  }
};
module.exports = markAsBorrowedSrv;
