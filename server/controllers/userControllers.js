const ApiError = require("../error");

class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res, next) {
    const { id } = req.query;

    if (!id) {
      return next(ApiError.badRequest("id is not defined!!!!!"));
    }

    res.json(id);
  }
}

module.exports = new UserController();
