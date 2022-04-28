const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

class StudentController{
  static getStudents(){
    const students = Reader.readJsonFile("data/students.json");
    return students;
  }
  static getStudentsEmail(){
    const studentsEmailWithCertification = StudentService.getStudentsWithCertificationEmail(this.getStudents());
    return studentsEmailWithCertification;
  }
}
module.exports = StudentController;