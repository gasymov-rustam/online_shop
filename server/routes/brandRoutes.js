const Router = require("express");
const router = new Router();
const { brandController } = require("../controllers");
const { roleCheckMiddleware } = require("../middleware");

router.post("/", roleCheckMiddleware("ADMIN"), brandController.create);
router.get("/", brandController.getAll);

module.exports = router;
