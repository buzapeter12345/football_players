const mongoose = require("mongoose");

const jatekosmaSchema = new mongoose.Schema({
  nev: {
    type: String,
    required: true,
  },
  kor: {
    type: Number,
    required: true,
    min: 10,
  },
  kep: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("jatekosma", jatekosmaSchema);
