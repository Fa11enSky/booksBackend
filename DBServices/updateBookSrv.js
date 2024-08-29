const fs = require("fs/promises");

const { errorsCreator } = require("../helpers");
const getBooksList = require("./getBooksListSrv");
const bookPath = require("./booksPath");

const updateBookSrv = async (isbn, updates) => {
  const books = await getBooksList();
  if (!books) {
    throw errorsCreator(500, "error read db");
  }

  const idx = books.findIndex((el) => el.isbn === isbn);
  if (idx === -1) {
    return null;
  }

  books[idx] = { ...books[idx], ...updates };

  try {
    await fs.writeFile(bookPath, JSON.stringify(books, null, 2));
    return books[idx];
  } catch (error) {
    console.log(error);
  }
};
module.exports = updateBookSrv;
