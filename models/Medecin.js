const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const medecinSchema = new Schema({
  // userId: String,
  Specilite: String,
  Sess_thrp_plnf: String,
  med_atrbs: String,
  mes_patients : [Object]
});
module.exports = mongoose.model("Medecin", medecinSchema);
