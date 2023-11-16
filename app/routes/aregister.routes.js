module.exports = app => {
    const aregisters = require("../controllers/aregister.controller.js");
  
    var router = require("express").Router();
    
    // Create a new Donars
    router.post("/", aregisters.create);
  
    // Retrieve all Donars
    router.get("/", aregisters.findAll);
  
  //   // Retrieve all published Donars
  //   router.get("/published", donars.findAllPublished);
  
  //   // Retrieve a single Donar with id
  //   router.get("/:id", donars.findOne);
  
  //   // Update a Donar with id
  //   router.put("/:id", donars.update);
  
  //   // Delete a Donar with id
  //   router.delete("/:id", donars.delete);
  
  //   // Delete all Donars
  //   router.delete("/", donars.deleteAll);

  //    // Fetch Counting of all Donars
  // router.get("/test/ftd", donars.findTotalDonars);
  
    app.use('/api/aregisters', router);
  };
  