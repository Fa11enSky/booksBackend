const getBooksList = require("../../DBServices/getBooksList");
const { errorsCreator } = require("../../helpers");

const getAllBooks = async (req,res) => {
    const books = await getBooksList();
    if(!books) throw errorsCreator(500,'db read error')
    res.status(200).json(books)
}
module.exports = getAllBooks;