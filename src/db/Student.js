const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllStudents = () => {
  return DB.students;
};

const createNewStudent = (newStudent) => {
  try {
    const isAlreadyAdded =
      DB.students.findIndex((student) => student.name === newStudent.name) > -1;

    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Student with the name '${newStudent.name}' already exists`,
      };
    }

    DB.students.push(newStudent);
    saveToDatabase(DB);

    return newStudent;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = { getAllStudents, createNewStudent };
