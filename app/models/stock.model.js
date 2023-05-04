module.exports = (sequelize, Sequelize) => {
    const Stock = sequelize.define("stock", {
      name: {
        type: Sequelize.STRING
      },
      availability: {
        type: Sequelize.STRING
      },
      group: {
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
    return Stock;
  };
  