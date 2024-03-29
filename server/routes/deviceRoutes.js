const Router = require("express");
const router = new Router();
const { deviceController } = require("../controllers");
const { roleCheckMiddleware } = require("../middleware");

router.post("/", roleCheckMiddleware("ADMIN"), deviceController.create);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);

module.exports = router;
