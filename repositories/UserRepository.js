const Repository = require("./generalRepository");
const User = require("../models/user");
const Message = require("../models/message");

function UserRepository() {
  Repository.prototype.constructor.call(this);
  this.model = User;
}


Repository.prototype.getInterlocutors = getInterlocutors;

function getInterlocutors(id, callback) {
  let model = this.model;

  Message.find(
    { senderId: id }
  )
    .distinct('receiverId',
      (error, ids) => {
        let transformedIDs = ids.map(obgId => { return obgId._id; });
        model.find(
          { '_id': { $in: transformedIDs } },
          callback
        );
      });

}


UserRepository.prototype = new Repository();

module.exports = new UserRepository();
