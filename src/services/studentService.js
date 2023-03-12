const { v4: uuid } = require("uuid");
const student = require("../db/Student");

const getAllStudents = () => {
  const allStudents = student.getAllStudents();
  return allStudents;
};
const getOneStudent = () => {
  return;
};
const createNewStudent = (newStudent) => {
  const studentToInsert = {
    ...newStudent,
    uid: uuid(),
    created: new Date().toLocaleString("en-US", { timezone: "UTC" }),
  };

  const createdStudent = student.createNewStudent(studentToInsert);

  return createdStudent;
};

module.exports = {
  getAllStudents,
  getOneStudent,
  createNewStudent,
};
