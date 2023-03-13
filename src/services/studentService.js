const { v4: uuid } = require("uuid");
const studentJson = require("../db/Student");
const studentSchema = require("../models/student");

const getAllStudents = (req, res) => {
  try {
    const students =  studentSchema.find().sort({ created: -1 }).limit(10).lean().exec(); //Return last 10 records
    return students;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneStudent = (studentId) => {
  try {
    const student = studentSchema.find({id: studentId}).lean().exec();
    return student;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};
const createNewStudent = (newStudent) => {
  const studentToInsert = {
    ...newStudent,
    uid: uuid(),
    created: new Date().toLocaleString("en-US", { timezone: "UTC" }),
  };

  //const createdStudent = studentJson.createNewStudent(studentToInsert);
  const student = studentSchema(studentToInsert);
  // const findStudent = studentSchema.find({id: newStudent.id});
  // if(findStudent) {
  //   throw {
  //     status: 400,
  //     message: `Student with the name '${newStudent.name}' already exists`,
  //   };
  // }
  try {
    student.save()
    return studentToInsert;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = {
  getAllStudents,
  getOneStudent,
  createNewStudent,
};
