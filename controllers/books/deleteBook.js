const { deleteBookByIsbn } = require("../../DBServices");
const { errorsCreator } = require("../../helpers");

const deleteBook = async (req, res) => {
  const { isbn } = req.params;

  const removed = await deleteBookByIsbn(isbn);
  if (!removed) {
    throw errorsCreator(404, "Book not found");
  }

  res.status(200).json(removed);
};
module.exports = deleteBook;
