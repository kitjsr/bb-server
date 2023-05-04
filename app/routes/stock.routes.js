module.exports = app => {
    const stocks = require("../controllers/stock.controller.js");
  
    var router = require("express").Router();
    
    // Create a new Stocks
    router.post("/", stocks.create);
  
    // Retrieve all Stocks
    router.get("/", stocks.findAll);
  
    // Retrieve all published Stocks
    router.get("/published", stocks.findAllPublished);
  
    // Retrieve a single Stock with id
    router.get("/:id", stocks.findOne);
  
    // Update a Stock with id
    router.put("/:id", stocks.update);
  
    // Delete a Stock with id
    router.delete("/:id", stocks.delete);
  
    // Delete all Stock
    router.delete("/", stocks.deleteAll);

     // Fetch Counting of all Stock
  router.get("/test/ftd", stocks.findTotalStocks);
  
    app.use('/api/stocks', router);
  };
  