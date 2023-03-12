const studentService = require("../services/studentService");


const getAllStudents = (req, res) => {
    const allStudents = studentService.getAllStudents();
    res.send({ status: 'OK', data: allStudents, total: allStudents.length });
};

const getOneStudent = (req, res) => {
    const student = studentService.getOneStudent(req.params.studentId);
    res.send(`Get student ${req.params.studentId}`);
};

const createNewStudent = (req, res) => {
    const { body } = req;
  
    if (
      !body.id
    ) {
      res.status(400).send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'id'",
        },
      });
    }
  
    const newStudent = {
      id: body.id,
      name: body.name,
      lastname: body.lastname,
      mail: body.mail,
      age: body.age,
      genre: body.genre,
      city: body.city,
      country: body.country,
      courses: body.courses,
      phone: body.phone,
    };
  
    try {
      const createdStudent = studentService.createNewStudent(newStudent);
      res.status(201).send({ status: "OK", data: createdStudent });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILDED", data: { error: error?.message || error } });
    }
};

const updateOneStudent = (req, res) => {
    const updateStudent = studentService.updateOnewStudent(req.params.studentId);
    res.send(`Update student ${req.params.studentId}`);
};

const deleteteOneStudent = (req, res) => {
    const deleteteStudent = studentService.deleteteOnewStudent(req.params.studentId);
    res.send(`Delete student ${req.params.studentId}`);
};

module.exports = {
    getAllStudents,
    getOneStudent,
    createNewStudent,
    updateOneStudent,
    deleteteOneStudent
};