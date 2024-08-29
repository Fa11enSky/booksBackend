const { errorsCreator } = require("../helpers");
const getBooksListSrv = require("./getBooksListSrv");

const searchBooksSrv = async (query) => {
  const books = await getBooksListSrv();
  if (!books) {
    throw errorsCreator(500, "Db read error");
  }

  const result = books.filter(
    (el) =>
      el.isbn.toLowerCase().includes(query.trim().toLowerCase()) ||
      el.title.toLowerCase().includes(query.trim().toLowerCase())
  );
  return result;
};

module.exports = searchBooksSrv;
