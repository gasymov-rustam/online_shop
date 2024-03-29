const Router = require("express");
const router = new Router();
const { typeController } = require("../controllers");
const { roleCheckMiddleware } = require("../middleware");

router.post("/", roleCheckMiddleware("ADMIN"), typeController.create);
router.get("/", typeController.getAll);

module.exports = router;
