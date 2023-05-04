module.exports = app => {
    const directorys = require("../controllers/directory.controller.js");
  
    var router = require("express").Router();
    
    // Create a new Directorys
    router.post("/", directorys.create);
  
    // Retrieve all Directorys
    router.get("/", directorys.findAll);
  
    // Retrieve all published Directorys
    router.get("/published", directorys.findAllPublished);
  
    // Retrieve a single Directory with id
    router.get("/:id", directorys.findOne);
  
    // Update a Directory with id
    router.put("/:id", directorys.update);
  
    // Delete a Directory with id
    router.delete("/:id", directorys.delete);
  
    // Delete all Directory
    router.delete("/", directorys.deleteAll);

     // Fetch Counting of all Directory
  router.get("/test/ftd", directorys.findTotalDirectorys);
  
    app.use('/api/directorys', router);
  };
  