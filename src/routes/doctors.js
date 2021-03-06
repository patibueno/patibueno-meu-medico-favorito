const express = require("express");
const router = express.Router();
const controller = require("../controllers/doctorController");

router.post("/", controller.createDoctor);
router.get("/:id", controller.getDoctor);
router.get("/", controller.getAllDoctors);
router.put("/:id", controller.updateDoctor);
router.patch("/:id/favorite", controller.updateFavorite);
router.delete("/:id", controller.deleteDoctor);

module.exports = router;
