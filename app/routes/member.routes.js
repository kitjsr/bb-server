module.exports = app => {
  const members = require("../controllers/member.controller.js");

  var router = require("express").Router();
  
  // Create a new Member
  router.post("/", members.create);

  // Retrieve all Members
  router.get("/", members.findAll);

  // Retrieve all published Members
  router.get("/published", members.findAllPublished);

  // Retrieve a single Member with id
  router.get("/:id", members.findOne);

  // Update a Member with id
  router.put("/:id", members.update);

  // Delete a Member with id
  router.delete("/:id", members.delete);

  // Delete all Members
  router.delete("/", members.deleteAll);

  // Fetch Counting of all Members
  router.get("/test/ftm", members.findTotalMembers);

  app.use('/api/members', router);
};
