const { rowController } = require("../controllers");

const router = require("express").Router();

router.get("/all", rowController.getAll);
router.get("/getMoySex", rowController.getMoyenneRatepersex);
router.get("/getSumAchat", rowController.getAchatsParType);
router.get("/getRevenuebrut", rowController.getRevenuebrut);

module.exports = router;
