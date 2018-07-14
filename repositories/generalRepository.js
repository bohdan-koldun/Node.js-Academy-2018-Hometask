function Repository() {}

Repository.prototype.getAll = getAll;
Repository.prototype.getById = getById;
Repository.prototype.saveNew = saveNew;
Repository.prototype.deleteById = deleteById;
Repository.prototype.updateById = updateById;

function getAll(callback) {
 let model = this.model;
 let query = model.find();
  query.exec(callback);
}

function getById(id, callback) {
 let model = this.model;
 let query = model.findOne({
    _id: id
  });
  query.exec(callback);
}

function saveNew(newObj, callback) {
  let model = this.model;
  model.create(newObj,callback);
 }

 function deleteById(id, callback) {
  let model = this.model;
  let query = model.remove({
     _id: id
   });
   query.exec(callback);
 }


 function updateById(id, updateObj, callback) {
  let model = this.model;
  let query = model.findByIdAndUpdate({
     _id: id
   }, updateObj);
   query.exec(callback);
 }

module.exports = Repository;
