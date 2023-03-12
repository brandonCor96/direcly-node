const express = require("express");
const router = express.Router();
const { getAllStudents, getOneStudent, createNewStudent } = require("../../controllers/studentController");

router
    .get('/', getAllStudents)
    .get('/:studentId', getOneStudent)
    .post('/', createNewStudent)

module.exports = router;