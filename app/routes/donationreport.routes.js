module.exports = app => {
    const donationreports = require("../controllers/donationreport.controller.js");
  
    var router = require("express").Router();
    
    // Create a new Donationreport
    router.post("/", donationreports.create);
  
    // Retrieve all Donationreports
    router.get("/", donationreports.findAll);
  
    // Retrieve all published Donationreports
    router.get("/published", donationreports.findAllPublished);
  
    // Retrieve a single Donationreport with id
    router.get("/:id", donationreports.findOne);
  
    // Update a Donationreport with id
    router.put("/:id", donationreports.update);
  
    // Delete a Donationreport with id
    router.delete("/:id", donationreports.delete);
  
    // Delete all Donationreports
    router.delete("/", donationreports.deleteAll);
  
    app.use('/api/donationreports', router);
  };
  