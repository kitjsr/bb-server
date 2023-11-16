module.exports = (sequelize, Sequelize) => {
    const Aregister = sequelize.define("aregisters", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      }
    });
  
    return Aregister;
  };
  