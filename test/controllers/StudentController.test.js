// const Reader = require("./../../lib/utils/Reader");
// const StudentService = require("./../../lib/services/StudentService");
const StudentController = require("./../../lib/controllers/StudentController");

describe("Student controller suite",() =>{
  test("1) Test getStudent", () => {
    const students = StudentController.getStudents();
    expect(typeof students).toBe("object");
  });
  const studentsEmail = StudentController.getStudentsEmail();
  test.each(studentsEmail)("2.%#) Test getStudentsEmail", (email) => {
    expect(email).toMatch("@visualpartnership.xyz");
  });
  test("3) Credits above 500", ()=> {
    const studentsList = StudentController.getStudentsCredits(500);
    const above500 = studentsList.every((student) => student.credits >500);
    expect(above500).toBe(true);
  });
});