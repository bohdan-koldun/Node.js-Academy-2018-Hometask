const router = require("express").Router();
const messageService = require("../../services/message");

router.get("/", (req, res, next) => {
  messageService.findAll((err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.get("/:id", (req, res, next) => {
  messageService.findOne(req.params.id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.post("/", (req, res, next) => {

  let newMessage = req.body;
  messageService.createOne( newMessage, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
     
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.delete("/:id", (req, res, next) => {
  messageService.deleteOne(req.params.id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.put("/:id", (req, res, next) => {

  let updateObj = req.body;
  messageService.updateOne(req.params.id, updateObj, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});


module.exports = router;
