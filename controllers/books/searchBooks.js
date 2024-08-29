const { searchBooksSrv } = require("../../DBServices");
const { errorsCreator } = require("../../helpers");

const searchBooks = async (req, res) => {
  const { query } = req.query;
  if (!query) {
    throw errorsCreator(400);
  }

  const result = await searchBooksSrv(query);
  if (result.length === 0) {
    throw errorsCreator(404);
  }
  res.status(200).json(result);
};
module.exports = searchBooks;
