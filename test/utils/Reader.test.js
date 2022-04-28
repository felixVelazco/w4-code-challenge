const Reader = require("./../../lib/utils/Reader");

describe("Reader test suite",() =>{
  test("1) Read a file", () => {
    const students = Reader.readJsonFile("data/students.json");
    expect(students).not.toBeNull();
    expect(students).not.toBeUndefined();
    expect(students.length).toBeGreaterThan(0);
  });
});