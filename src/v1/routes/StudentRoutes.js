const express = require("express");
const router = express.Router();
const studentController = require("../../controllers/studentController");

router
    .get('/', studentController.getAllStudents)
    .get('/:studentId', studentController.getOneStudent)
    .post('/', studentController.createNewStudent)
    .patch('/:studentId', studentController.updateOneStudent)
    .delete('/:studentId', studentController.deleteteOneStudent);

module.exports = router;