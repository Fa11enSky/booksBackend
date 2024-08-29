const errorsCreator = require("./errorsCreator");

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(errorsCreator(400, error.message));
    }
    next();
  };

  return func;
};
module.exports = validateBody;
