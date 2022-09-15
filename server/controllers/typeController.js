const { Type } = require("../models");
const ApiError = require("../error");

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });

    res.json(type);
  }
  async getAll(req, res) {
    return res.json(await Type.findAll());
  }
}

module.exports = new TypeController();
