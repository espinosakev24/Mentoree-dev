const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("mentoree_db", "mentoree_dev", "fikeca", {
    host: "localhost",
    dialect: "mysql"
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
