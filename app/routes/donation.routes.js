module.exports = app => {
    const donations = require("../controllers/donation.controller.js");
  
    var router = require("express").Router();
    
    // Create a new Donations
    router.post("/", donations.create);
  
    // Retrieve all Donations
    router.get("/", donations.findAll);

    // Retrieve all Donations with Donar detail
    router.get("/donation/", donations.findAllDonations);

    // Retrieve all Donations with Donar details Counting - Blood Group Wise
    router.get("/donation/count/:group", donations.findAllDonationsCount);
  
    // Retrieve all published Donations
    // router.get("/published",donations.findAllPublished);
  
    // Retrieve a single Donation with id
    router.get("/:id", donations.findOne);
  
    // Update a Donation with id
    // router.put("/:id", donations.update);
  
    // // Delete a Donation with id
    // router.delete("/:id", donations.delete);
  
    // // Delete all Donations
    // router.delete("/", donations.deleteAll);
  
    app.use('/api/donations', router);
  };
  