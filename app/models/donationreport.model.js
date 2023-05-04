module.exports = (sequelize, Sequelize) => {
    const Donationreport = sequelize.define("donationreport", {
      name: {
        type: Sequelize.STRING
      },
      bloodbank: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      }
    });
    return Donationreport;
  };
  