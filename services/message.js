const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
  findAll: callback => {
    MessageRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    MessageRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },

  createOne: (newObj, callback) => {
    MessageRepository.saveNew( newObj, (err, data) => {
      callback(err, data);
    });
  },

  deleteOne: (id, callback) => {
    MessageRepository.deleteById( id, (err, data) => {
      callback(err, data);
    });
  },
  
  updateOne: (id, updateObj, callback) => {
    MessageRepository.updateById( id, updateObj, (err, data) => {
      callback(err, data);
    });
  }
};