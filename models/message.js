const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//описуємо схему повідомлення чату
const messageSchema = Schema({
    senderId: { type: Schema.Types.ObjectId, ref: 'User' },
    receiverId: { type: Schema.Types.ObjectId, ref: 'User' },
    message: String
});

//створюємо модель повідомлення чату на основі схеми
const Message = mongoose.model("Message", messageSchema);

//експортуємо модель повідомлення
module.exports = Message;
