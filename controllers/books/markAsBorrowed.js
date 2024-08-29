const { markAsBorrowedSrv } = require("../../DBServices")
const { errorsCreator } = require("../../helpers")

const markAsBorrowed = async(req,res) => {
    const { isbn } = req.params
    const {isBorrowed}=req.body
    const result = await markAsBorrowedSrv(isbn,isBorrowed)
    if (!result) {
        throw errorsCreator(500)
    }
    res.status(200).json(result)
}
module.exports = markAsBorrowed