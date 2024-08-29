const fs = require("fs/promises");

const bookPath = require("./booksPath");
const { errorsCreator } = require("../helpers");

const getBooksList = async () => {
  try {
    const books = await fs.readFile(bookPath);
    return JSON.parse(books);
  } catch (error) { 
    return null
  }
};

module.exports = getBooksList;
