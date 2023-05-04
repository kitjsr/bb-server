module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define("member", {
      name: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATEONLY
      },
      subscription: {
        type: Sequelize.STRING
      },
      trainername: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      emergencyno: {
        type: Sequelize.STRING
      },
      relationship: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      cweight: {
        type: Sequelize.STRING
      },
      gweight: {
        type: Sequelize.STRING
      }
    });
    return Member;
  };
  