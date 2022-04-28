const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

class StudentController{
  static getStudents(){
    const students = Reader.readJsonFile("data/students.json");
    
    return students;
  }
  static getStudentsEmail(){
    const students = this.getStudents();
    const studentsEmailWithCertification = StudentService.getStudentsWithCertificationEmail(students);
    
    return studentsEmailWithCertification;
  }
  static getStudentsCredits(credits){
    const students = this.getStudents();
    const studentsCreditsAbove = StudentService.filterStudentsByCredits(students,credits);
    
    return studentsCreditsAbove;
  }
}
module.exports = StudentController;