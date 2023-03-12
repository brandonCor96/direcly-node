const studentService = require("../services/studentService");

const getAllStudents = (req, res) => {
  const allStudents = studentService.getAllStudents();
  res.send({ status: "OK", data: allStudents, total: allStudents.length });
};

const getOneStudent = (req, res) => {
  const student = studentService.getOneStudent(req.params.studentId);
  res.send(`Get student ${req.params.studentId}`);
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
