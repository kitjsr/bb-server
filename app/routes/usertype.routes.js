module.exports = app => {
    const donars = require("../controllers/usertype.controller.js");
  
    var router = require("express").Router();
  
    // Update a Donar with id
    router.put("/:id", donars.update);
  
  
    app.use('/api/usertype', router);
  };
  