module.exports = {
  HOST: "localhost",
  USER: "bloodbank",
  PASSWORD: "bloodbank",
  DB: "bloodbank",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
