module.exports = (sequelize, Sequelize) => {
    const Donation = sequelize.define("donation", {
      // id: {
      //   type: Sequelize.STRING(50),
      //   allowNull: false,
      //   primaryKey: true,
      // },
      donarId: {
        type: Sequelize.STRING
      },
      directoryId: {
        type: Sequelize.STRING
      }
    });
    return Donation;
  };
  