const fs = require("fs/promises");

const getBooksList = require("./getBooksListSrv");
const bookPath = require("./booksPath");
const { errorsCreator } = require("../helpers");

const deleteBookByIsbn = async (isbn) => {
  const books = await getBooksList();
  if (!books) {
    throw errorsCreator(500, "read db error");
  }

  const idx = books.findIndex((el) => el.isbn === isbn);
  if (idx === -1) return null;

  const [result] = books.splice(idx, 1);
  try {
    await fs.writeFile(bookPath, JSON.stringify(books, null, 2));
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = deleteBookByIsbn;
