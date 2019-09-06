const express = require("express");
const router = express.Router();
const projectRoutes = require("./Project");

router.use("/projects", projectRoutes);

module.exports = router;
