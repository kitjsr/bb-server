const db = require("../models");
const Donar = db.donars;
// const Directory = db.directorys;
const Donation = db.donations;
const Op = db.Sequelize.Op;

// Create and Save a new Donar
exports.create = (req, res) => {
  // Validate request
  if (!req.body.donarId) {
    res.status(400).send({
      message: "Donar Id can not be empty!"
    });
    return;
  }

  // Create a Donation
  const donation = {
    donarId: req.body.donarId,
    directoryId: req.body.directoryId
  };
console.log(donation);
  // Save Donation in the database
  Donation.create(donation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Donation."
      });
    });
};

// Retrieve all Donations from the database.
exports.findAll = (req, res) => {
  const did = req.query.did;
  var condition = did ? { did: { [Op.like]: `%${did}%` } } : null;

  Donation.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Donation."
      });
    });
};

// Find a single Donation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Donation.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Donation with id=" + id
      });
    });
};

// Update a Donation by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Donation.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Donation Details updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Donation with id=${id}. `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Donation with id=" + id
      });
    });
};

// Delete a Donation  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  donation.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Donation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Donation with id=${id}. Maybe Donation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Donation with id=" + id
      });
    });
};

// Delete all Donations from the database.
exports.deleteAll = (req, res) => {
    Donation.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Donations were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Donations."
      });
    });
};

// find all Active Donations
exports.findAllPublished = (req, res) => {
    Donation.findAll({ where: { active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Donations."
      });
    });
};

// Find All Donation with Donar Details
exports.findAllDonations = (req, res) => {
  
  Donation.findAll(
    {
      include: [
        {
          model: Donar,
          // include:[
          //   {
          //     model:Directory,
          //   }
          // ]


        }
      ]
    }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Donations.",
      });
    });
};

// Find All Donation with Donar Details
// exports.findAllDonations = (req, res) => {
  
//   Donation.findAll(
//     {
//       include: [
//         {
//           model: Donar,
//         }
//       ]
//     }
//   )
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Donations.",
//       });
//     });
// };
