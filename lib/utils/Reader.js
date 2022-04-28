const fs = require("fs");
class Reader{
  static readJsonFile(path){
    const raw = fs.readFileSync(path);
    const students = JSON.parse(raw);
    return students;
  }
}

module.exports = Reader;