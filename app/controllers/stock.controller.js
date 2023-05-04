const db = require("../models");    
const Stock = db.stocks;
const Op = db.Sequelize.Op;

// This is for branch work testing
// Create and Save a new Stock
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }
// Testing
  // Create a Stock
  const stock = {
    name: req.body.name,
    availability: req.body.availability,
    group: req.body.group,
    address: req.body.address,
    mobile: req.body.mobile,
    email: req.body.email,
    category: req.body.category
  };

  // Save Stock in the database
  Stock.create(stock)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stock."
      });
    });
};

// Retrieve all Stocks from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Stock.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving stocks."
      });
    });
};

// Find a single Stock with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Stock.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Stock with id=" + id
      });
    });
};

// Update a Stock by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Stock.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Stock Details updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Stock with id=${id}. `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Stock with id=" + id
      });
    });
};

// Delete a Stock with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Stock.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Stock was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Stock with id=${id}. Maybe Stock was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Stock with id=" + id
      });
    });
};

// Delete all Stocks from the database.
exports.deleteAll = (req, res) => {
    Stock.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Stocks were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all stocks."
      });
    });
};

// find all Active Stocks
exports.findAllPublished = (req, res) => {
    Stock.findAll({ where: { active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving stocks."
      });
    });
};
// Count All Stocks
exports.findTotalStocks = (req, res) => {
 
    Stock.count().then(nums => {
    res.send({ no: `${nums}` });
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving stocks."
      });
    });
};
