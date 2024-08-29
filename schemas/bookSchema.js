const Joi = require("joi");

const createBookSchema = Joi.object()
  .options({ abortEarly: false })
  .keys({
    isbn: Joi.string().min(2).max(20).required(),
    title: Joi.string().min(2).max(50).required(),
    author: Joi.string().min(2).max(50).required(),
  });

const updateBookSchema = Joi.object()
  .options({ abortEarly: false })
    .keys({
    isbn: Joi.string().min(2).max(30),
    title: Joi.string().min(2).max(50),
    author: Joi.string().min(2).max(50),
  });

module.exports = {
  createBookSchema,
  updateBookSchema,
};
