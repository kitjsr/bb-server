module.exports = (sequelize, Sequelize) => {
    const Directory = sequelize.define("directory", {
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      }
    });
    return Directory;
  };
  