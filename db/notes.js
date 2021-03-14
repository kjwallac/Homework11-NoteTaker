const fs = require("fs");

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
};
