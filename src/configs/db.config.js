const { Sequelize } = require("sequelize");

const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_DATABASE;

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: "mysql",
  port: PORT,
});

module.exports.HOST = HOST;
module.exports.PORT = PORT;
module.exports.USER = USER;
module.exports.PASSWORD = PASSWORD;
module.exports.DATABASE = DATABASE;

module.exports.sequelize = sequelize;
