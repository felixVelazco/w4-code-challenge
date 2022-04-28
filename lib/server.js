const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) =>{
  res.json({message: "welcome"});
});

app.get("/v1/students", (req,res) => {
  const students = StudentController.getStudents();
  res.json(students);
});

app.get("/v1/students/certificated/email", (req,res) => {
  const studentsEmailWithCertification = StudentController.getStudentsEmail();
  res.json(studentsEmailWithCertification);
});

app.get("/v1/students/credits/above/:credits", (req,res) => {
  const credits = req.params.credits;
  const studentsAboveCredits = StudentController.getStudentsCredits(credits);
  res.json(studentsAboveCredits);
});


app.listen(port, () => {
  console.log(`StudentController API in localhost ${port}`);
  
});