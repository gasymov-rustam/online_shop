const { Brand } = require("../models");

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });

    res.json(brand);
  }

  async getAll(req, res) {
    return res.json(await Brand.findAll());
  }
}

module.exports = new BrandController();
