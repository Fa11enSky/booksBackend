const updateBookSrv = require("../../DBServices/updateBookSrv")
const { errorsCreator } = require("../../helpers")


const updateBook =async (req,res) => {
    const { isbn } = req.params
    const result = await updateBookSrv(isbn, req.body)
    if (!result) {
        throw errorsCreator(404,'Book not found ')
    }
    res.status(200).json(result)
}
module.exports = updateBook