const router = require("express").Router();
const userService = require("../../services/user");

router.get("/", (req, res, next) => {
  userService.findAll((err, data) => {
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
  userService.findOne(req.params.id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.get("/interlocutors/:id", (req, res, next) => {
  userService.findInterlocutors(req.params.id, (err, data) => {
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

  let newUser = req.body;
  userService.createOne( newUser, (err, data) => {
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
  userService.deleteOne(req.params.id, (err, data) => {
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
  userService.updateOne(req.params.id, updateObj, (err, data) => {
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
