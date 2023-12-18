const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UtilisateurSchema = new Schema({
  Nom: String,
  Prenom: String,
  Gener: String,
  avatar : String,
  dt_Naiss: Date,
  email: String,
  password: String,
  contacts:[Object],
  is_accepte: {
    type:Boolean,
    default:false
  },
  role: String,
  role_info: Object, //admin ou medcin ou patient
},{timestamps:true});
module.exports = mongoose.model("Utilisateur", UtilisateurSchema);
