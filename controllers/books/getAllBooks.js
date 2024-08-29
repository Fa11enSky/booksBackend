const { getBooksListSrv } = require("../../DBServices");
const { errorsCreator } = require("../../helpers");

const getAllBooks = async (req, res) => {
  const books = await getBooksListSrv();
  if (!books) throw errorsCreator(500, "db read error");
  res.status(200).json(books);
};
module.exports = getAllBooks;
