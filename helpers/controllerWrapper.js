const controllerWrapper = (ctrl) => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
        console.log('wrapper error')
      next(error);
    }
  };
  return func;
};
module.exports = controllerWrapper;
