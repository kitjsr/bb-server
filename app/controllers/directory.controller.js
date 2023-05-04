const db = require("../models");    
const Directory = db.directorys;
const Op = db.Sequelize.Op;

// This is for branch work testing
// Create and Save a new Directory
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }
// Testing
  // Create a Directory
  const directory = {
    name: req.body.name,
    address: req.body.address,
    mobile: req.body.mobile,
    email: req.body.email,
    category: req.body.category
  };

  // Save Directory in the database
  Directory.create(directory)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Directory."
      });
    });
};

// Retrieve all Directorys from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Directory.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Directorys."
      });
    });
};

// Find a single Directory with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Directory.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Directory with id=" + id
      });
    });
};

// Update a Directory by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Directory.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Directory Details updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Directory with id=${id}. `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Directory with id=" + id
      });
    });
};

// Delete a Directory with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Directory.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Directory was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Directory with id=${id}. Maybe Directory was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Directory with id=" + id
      });
    });
};

// Delete all Directorys from the database.
exports.deleteAll = (req, res) => {
  Directory.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Directorys were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Directorys."
      });
    });
};

// find all Active Directorys
exports.findAllPublished = (req, res) => {
  Directory.findAll({ where: { active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Directorys."
      });
    });
};
// Count All Directorys
exports.findTotalDirectorys = (req, res) => {
 
  Directory.count().then(nums => {
    res.send({ no: `${nums}` });
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Directorys."
      });
    });
};
