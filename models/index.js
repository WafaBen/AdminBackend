const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,
    dialectOptions: {
      ssl: {
        require: 1, // This will help you. But you will see nwe error
        rejectUnauthorized: 0// This line will fix new error
      }
    },
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.adminTC = require("../models/user.model.js")(sequelize, Sequelize);
module.exports = db;
