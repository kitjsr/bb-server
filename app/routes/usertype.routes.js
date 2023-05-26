module.exports = app => {
    const usertypes = require("../controllers/usertype.controller.js");
  
    var router = require("express").Router();
  
    // Update a Usertype with id
    router.put("/:id", usertypes.update);
  
  
    app.use('/api/usertype', router);
  };
  