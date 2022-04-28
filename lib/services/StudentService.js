class StudentService{
  static filterStudentsCertification(students){
    const studentsWithCertification = students.filter((student) => student.haveCertification == true);
    return studentsWithCertification;
  }
}
module.exports = StudentService;