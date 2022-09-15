const { v4 } = require("uuid");

class DeviceController {
  async create(req, res) {
    const { name, price, brandId, typeId, info } = req.body;
    const { img } = req.files;
    let fileName = v4() + ".jpg";
  }

  async getAll(req, res) {}
  async getOne(req, res) {}
}

module.exports = new DeviceController();
