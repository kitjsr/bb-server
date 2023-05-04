const db = require("../models");
const Trainer = db.trainers;
const Op = db.Sequelize.Op;
// This is for branch work testing
// Create and Save a new Trainer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }
// Testing
  // Create a Trainer
  const trainer = {
    name: req.body.name,
    mobile: req.body.mobile,
    dob:req.body.dob,
    email:req.body.email,
    gender:req.body.gender,
    address:req.body.address
  };

  // Save Trainer in the database
  Trainer.create(trainer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Trainer."
      });
    });
};

// Retrieve all Trainers from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Trainer.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving trainers."
      });
    });
};

// Find a single Trainer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Trainer.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Trainer with id=" + id
      });
    });
};

// Update a Trainer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Trainer.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Trainer Details updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Trainer with id=${id}. `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Trainer with id=" + id
      });
    });
};

// Delete a Trainer  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Trainer.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Trainer was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Trainer with id=${id}. Maybe Trainer was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Trainer with id=" + id
      });
    });
};

// Delete all Trainers from the database.
exports.deleteAll = (req, res) => {
  Trainer.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Trainers were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all trainers."
      });
    });
};

// find all Active Trainers
exports.findAllPublished = (req, res) => {
  Trainer.findAll({ where: { active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving trainers."
      });
    });
};
// Count All Trainers
exports.findTotalTrainers = (req, res) => {
 
  Trainer.count().then(nums => {
    res.send({ no: `${nums}` });
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving trainers."
      });
    });
};
