const express = require("express");
const router = express.Router();
const project = require("../../models/Project");
const projectsController = require("../../controllers/projectsController");

router.route("/all").get(projectsController.findAll);
router.route("/create").post(projectsController.create);

module.exports = router;
