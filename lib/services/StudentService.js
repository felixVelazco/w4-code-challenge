class StudentService{
  static filterStudentsCertification(students){
    const studentsWithCertification = students.filter((student) => student.haveCertification == true);
    return studentsWithCertification;
  }
  static getStudentsWithCertificationEmail(students){
    const emailFromStudents = this.filterStudentsCertification(students).map((student) => {return student.email;});
    return emailFromStudents;
  }
  static filterStudentsByCredits(students, credits){
    const studentsAboveCredits = students.filter((student) => student.credits>credits);
    return studentsAboveCredits;
  }
}
module.exports = StudentService;