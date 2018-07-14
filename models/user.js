const mongoose = require("mongoose");

//описуємо схему користвача чату
const userSchema = mongoose.Schema({
  name: String,
  phone: String
});

//створюємо модель користувача чату на основі схеми
const User = mongoose.model("User", userSchema);

//експортуємо модель користувача
module.exports = User;
