const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

const students = Reader.readJsonFile("data/students.json");

describe("Unit test suite",() =>{
  test("1) Filter students with certification", () => {
    const studentsList = StudentService.filterStudentsCertification(students);
    const allCertification = studentsList.every((student) => student.haveCertification == true);
    expect(allCertification).toBe(true);
  });
});