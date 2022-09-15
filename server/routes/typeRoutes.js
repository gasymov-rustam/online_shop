const Router = require("express");
const router = new Router();
const { typeController } = require("../controllers");

router.post("/", typeController.create);
router.get("/", typeController.getAll);

module.exports = router;
