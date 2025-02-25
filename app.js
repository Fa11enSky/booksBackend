const express = require('express')
const cors = require('cors');
require("dotenv").config();
const booksRouter = require('./routes/books');

const { PORT } = process.env
const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/books',booksRouter)
app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(PORT)