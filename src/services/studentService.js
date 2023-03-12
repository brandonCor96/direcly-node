const { v4: uuid } = require("uuid");
const Student = require("../db/Student");

const getAllStudents = () => {
    const allStudents = Student.getAllStudents();
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
    }

    const createdStudent = Student.createNewStudent(studentToInsert);
    
    return createdStudent;
};
const updateOneStudent = () => {
    return;
};
const deleteteOneStudent = () => {
    return;
};

module.exports = {
    getAllStudents,
    getOneStudent,
    createNewStudent,
    updateOneStudent,
    deleteteOneStudent
};