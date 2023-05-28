const mongoose = require("mongoose");

const jatekosfcSchema = new mongoose.Schema({
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

module.exports = mongoose.model("jatekosfc", jatekosfcSchema);