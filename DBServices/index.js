const addBookSrv = require("./addBookSrv");
const deleteBookByIsbn = require("./deleteBookByIsbn");
const getBooksListSrv = require("./getBooksListSrv");
const markAsBorrowedSrv = require("./markAsBorrowedSrv");
const updateBookSrv = require("./updateBookSrv");
const searchBooksSrv = require("./searchBooksSrv");

module.exports = {
  addBookSrv,
  deleteBookByIsbn,
  getBooksListSrv,
  markAsBorrowedSrv,
  updateBookSrv,
  searchBooksSrv,
};
