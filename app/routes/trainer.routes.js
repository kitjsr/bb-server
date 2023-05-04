module.exports = app => {
    const trainers = require("../controllers/trainer.controller.js");
  
    var router = require("express").Router();
    
    // Create a new Trainers
    router.post("/", trainers.create);
  
    // Retrieve all Trainers
    router.get("/", trainers.findAll);
  
    // Retrieve all published Trainers
    router.get("/published", trainers.findAllPublished);
  
    // Retrieve a single Trainer with id
    router.get("/:id", trainers.findOne);
  
    // Update a Trainer with id
    router.put("/:id", trainers.update);
  
    // Delete a Trainer with id
    router.delete("/:id", trainers.delete);
  
    // Delete all Trainers
    router.delete("/", trainers.deleteAll);

     // Fetch Counting of all Trainers
  router.get("/test/ftt", trainers.findTotalTrainers);
  
    app.use('/api/trainers', router);
  };
  