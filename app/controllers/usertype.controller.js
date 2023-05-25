const db = require("../models");    
const Usertype = db.usertypes;
const Op = db.Sequelize.Op;


// Update a User Type by the userId in the request
exports.update = (req, res) => {
  const userId = req.params.id;
console.log("JSR");
console.log(req.body);
  Usertype.update(req.body, {
    where: { userId: userId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User Type updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User Type with id=${id}. `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User Type with id=" + id
      });
    });
};

