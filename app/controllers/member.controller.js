const db = require("../models");
const Member = db.members;
const Op = db.Sequelize.Op;

// Create and Save a new Member
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }

  // Create a Member
  const member = {
    name: req.body.name,
    mobile: req.body.mobile,
    dob: req.body.dob,
    subscription: req.body.subscription,
    trainername: req.body.trainername,
    email: req.body.email,
    gender: req.body.gender,
    emergencyno: req.body.emergencyno,
    relationship: req.body.relationship,
    height: req.body.height,
    cweight: req.body.cweight,
    gweight: req.body.gweight,
    };

  // Save Member in the database
  Member.create(member)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Member."
      });
    });
};

// Retrieve all Members from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Member.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving members."
      });
    });
};

// Find a single Member with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Member.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Member with id=" + id
      });
    });
};

// Update a Member by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Member.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Member Details updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Member with id=${id}. `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Member with id=" + id
      });
    });
};

// Delete a Member with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Member.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Member was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Member with id=${id}. Maybe Member was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Member with id=" + id
      });
    });
};

// Delete all Members from the database.
exports.deleteAll = (req, res) => {
  Member.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Members were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all members."
      });
    });
};

// find all Active Members
exports.findAllPublished = (req, res) => {
  Member.findAll({ where: { active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving members."
      });
    });
};

// Correct Fetch Today Attendance
// exports.findTodayAttendance = (req, res) => {
//   const start = new Date(new Date().setHours(0,0,0,0));
//   // console.log(start.getHours());
//   const end = new Date(new Date().setDate(new Date().getDate()));

//   At.count({ where: {
//     createdAt: {
//       [Op.gte]: start,
//       [Op.lte]: end,
//     }
//   } }).then(nums => {
//     res.send({ no: `${nums}` });
//   })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving students."
//       });
//     });
// };
 
// Count All Members
exports.findTotalMembers = (req, res) => {
 
  Member.count().then(nums => {
    res.send({ no: `${nums}` });
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving students."
      });
    });
};
