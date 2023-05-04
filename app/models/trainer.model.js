module.exports = (sequelize, Sequelize) => {
  const Trainer = sequelize.define("trainer", {
    name: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    dob: {
      type: Sequelize.DATEONLY
    },
  
    email: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    
    address: {
      type: Sequelize.STRING
    }
  });
  return Trainer;
};
