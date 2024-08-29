const { addBookSrv } = require("../../DBServices");
const { errorsCreator } = require("../../helpers");

const addBook = async (req, res) => {
  const result = await addBookSrv(req.body);
  if (!result) {
    throw errorsCreator(500);
  }
  res.status(201).json(result);
};
module.exports = addBook;
