const UserRepository = require("../repositories/UserRepository");

module.exports = {
  findAll: callback => {
    UserRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    UserRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },

  createOne: (newObj, callback) => {
    UserRepository.saveNew( newObj, (err, data) => {
      callback(err, data);
    });
  },

  deleteOne: (id, callback) => {
    UserRepository.deleteById( id, (err, data) => {
      callback(err, data);
    });
  },
  updateOne: (id, updateObj, callback) => {
    UserRepository.updateById( id, updateObj, (err, data) => {
      callback(err, data);
    });
  }
};
