const express = require("express");
const authMiddleware = require("../../middleware/basicAuth");
const router = express.Router();
const {
  getAllStudents,
  getOneStudent,
  createNewStudent,
} = require("../../controllers/studentController");

router
  .get("/", authMiddleware, getAllStudents)
  .get("/:studentId", authMiddleware, getOneStudent)
  .post("/", authMiddleware, createNewStudent);

module.exports = router;
