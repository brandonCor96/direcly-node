const studentService = require("../services/studentService");

const getAllStudents = async (req, res) => {
  //const { mode } = req.query;
  try {
    const allStudents = await studentService.getAllStudents();
    res.send({ status: "OK", data: allStudents });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }  
};

const getOneStudent = async (req, res) => {
  const {
    params: { studentId },
  } = req;

  if (!studentId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':studentId' can not be empty" },
    });
    return;
  }

  try {
    const student = await studentService.getOneStudent(studentId);
    res.send({ status: "OK", data: student });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewStudent = (req, res) => {
  const { body } = req;

  if (!body.id) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'id'",
      },
    });
  }

  const  {
    id,
    name,
    lastname,
    mail,
    age,
    genre,
    city,
    country,
    courses,
    phone,
  } = body;

  try {
    const createdStudent = studentService.createNewStudent({id, name, lastname, mail, age, genre, city, country, courses, phone});
    res.status(201).send({ status: "OK", data: createdStudent });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILDED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllStudents,
  getOneStudent,
  createNewStudent,
};
