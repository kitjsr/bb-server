module.exports = (sequelize, Sequelize) => {
    const Donar = sequelize.define("donar", {
      name: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATEONLY
      },
      gender: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.STRING
      },
      fathername: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.STRING
      }
    });
    return Donar;
  };
  