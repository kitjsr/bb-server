const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.trainers = require("./trainer.model.js")(sequelize, Sequelize);
db.members = require("./member.model.js")(sequelize, Sequelize);
// bloodbank:
db.donars = require("./donar.model.js")(sequelize, Sequelize);
db.directorys = require("./directory.model.js")(sequelize, Sequelize);
db.stocks = require("./stock.model.js")(sequelize, Sequelize);
db.donations = require("./donation.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.roles = require("./role.model.js")(sequelize, Sequelize);
db.userRoles = require("./userRole.model.js")(sequelize, Sequelize);

db.roles.belongsToMany(db.users, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.users.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.donations.belongsTo(db.directorys, {as: 'directories'});
db.donations.belongsTo(db.donars, {as: 'donars'});

// db.donars.belongsToMany(db.directorys, { through: 'donations', foreignKey: "directoryId"});
// db.directorys.belongsToMany(db.donars, { through: 'donations', foreignKey: "donarId"});

// db.directorys.belongsToMany(db.donations, { through: 'kdirectories', foreignKey: "bloodbankId"});
// db.donations.belongsToMany(db.directorys, { through: 'mdirectories', foreignKey: "donationsId"});

// db.directorys.hasMany(db.donations);
// db.donations.belongsTo(db.directorys);

module.exports = db;
