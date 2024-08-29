const fs = require("fs/promises");

const bookPath = require("./booksPath");
const getBooksListSrv = require("./getBooksListSrv");
const { errorsCreator } = require("../helpers");

const addBookSrv = async (book) => {
  const books = await getBooksListSrv(bookPath);
  if (!books) {
    throw errorsCreator(500, "Db read error");
  }

  const idx = books.findIndex((el) => el.isbn === book.isbn);
  if (idx !== -1) {
    throw errorsCreator(409);
  }

  const newBook = { ...book, isBorrowed: true };
  books.push(newBook);

  try {
    await fs.writeFile(bookPath, JSON.stringify(books, null, 2));
    return newBook;
  } catch (error) {
    console.log(error);
  }
};
module.exports = addBookSrv;
