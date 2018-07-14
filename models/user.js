const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//описуємо схему користвача чату
const userSchema = Schema({
  name: String,
  phone: String
});

//створюємо модель користувача чату на основі схеми
const User = mongoose.model("User", userSchema);

//експортуємо модель користувача
module.exports = User;
