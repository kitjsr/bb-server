const db = require("../models");    
const Aregister = db.aregisters;
const Op = db.Sequelize.Op;

// This is for branch work testing
// Create and Save a new Donar
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "User Name can not be empty!"
    });
    return;
  }
// Testing
  // Create a  Registration Details
  const aregister = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };

  // Save in the database
  Aregister.create(aregister)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while registration."
      });
    });
};

// Retrieve all Donars from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition =username ? { username: { [Op.like]: `%${username}%` } } : null;

  Aregister.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// // Find a single Donar with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Donar.findByPk(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Donar with id=" + id
//       });
//     });
// };

// // Update a Donar by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;

//   Donar.update(req.body, {
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Donar Details updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update Donar with id=${id}. `
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Donar with id=" + id
//       });
//     });
// };

// // Delete a Donar with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Donar.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Donar was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Donar with id=${id}. Maybe Donar was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Donar with id=" + id
//       });
//     });
// };

// // Delete all Donars from the database.
// exports.deleteAll = (req, res) => {
//   Donar.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Donars were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all donars."
//       });
//     });
// };

// // find all Active Donars
// exports.findAllPublished = (req, res) => {
//   Donar.findAll({ where: { active: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving donars."
//       });
//     });
// };
// // Count All Donars
// exports.findTotalDonars = (req, res) => {
 
//   Donar.count().then(nums => {
//     res.send({ no: `${nums}` });
//   })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving donars."
//       });
//     });
// };
