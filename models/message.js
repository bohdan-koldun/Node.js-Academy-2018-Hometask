const mongoose = require("mongoose");

//описуємо схему повідомлення чату
const messageSchema = mongoose.Schema({
    senderId: String,
    receiverId: String,
    message: String
});

//створюємо модель повідомлення чату на основі схеми
const Message = mongoose.model("Message", messageSchema);

//експортуємо модель повідомлення
module.exports = Message;
