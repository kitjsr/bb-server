module.exports = app => {
    const donars = require("../controllers/donar.controller.js");
  
    var router = require("express").Router();
    
    // Create a new Donars
    router.post("/", donars.create);
  
    // Retrieve all Donars
    router.get("/", donars.findAll);
  
    // Retrieve all published Donars
    router.get("/published", donars.findAllPublished);
  
    // Retrieve a single Donar with id
    router.get("/:id", donars.findOne);
  
    // Update a Donar with id
    router.put("/:id", donars.update);
  
    // Delete a Donar with id
    router.delete("/:id", donars.delete);
  
    // Delete all Donars
    router.delete("/", donars.deleteAll);

     // Fetch Counting of all Donars
  router.get("/test/ftd", donars.findTotalDonars);
  
    app.use('/api/donars', router);
  };
  