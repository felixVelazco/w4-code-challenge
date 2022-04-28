const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

const students = Reader.readJsonFile("data/students.json");

describe("Unit test suite",() =>{
  test("1) Filter students with certification", () => {
    const studentsList = StudentService.filterStudentsCertification(students);
    const allCertification = studentsList.every((student) => student.haveCertification == true);
    expect(allCertification).toBe(true);
  });
  const studentsEmail = StudentService.getStudentsWithCertificationEmail(students);
  test.each(studentsEmail)("2.%#) Emails from students with certification", (student) => {
    expect(student).toMatch("@visualpartnership.xyz");
  });
  test("3) Credits above 500", ()=> {
    const studentsList = StudentService.filterStudentsByCredits(students, 500);
    const above500 = studentsList.every((student) => student.credits >500);
    expect(above500).toBe(true);
  });
});