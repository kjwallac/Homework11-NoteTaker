const fs = require("fs");
let records = [];
const filename = "./db/db.json";
module.exports = {
  saveNote(note) {
    if (fs.existsSync(filename)) {
      const json = fs.readFileSync(filename, "utf-8");
      records = [...JSON.parse(json), note];
    }
    fs.writeFileSync(filename, JSON.stringify(records, null, "\t"));
  },

  readNotes() {
    if (fs.existsSync(filename)) {
      const json = fs.readFileSync(filename, "utf-8");
      records = JSON.parse(json);
      return records;
    }
    return [];
  },

  deleteNote(id) {
    if (fs.existsSync(filename)) {
      const json = fs.readFileSync(filename, "utf-8");
      records = JSON.parse(json);
      const note = records.find(record => record.id === id);
      if (note) {
          const index = records.indexOf(note);
          records.splice(index, 1);
          fs.writeFileSync(filename, JSON.stringify(records, null, "\t"));
      }
    }
  },
};
