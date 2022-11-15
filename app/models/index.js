'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config1 = require(__dirname + '/../../config/db1.config.json')[env];
const config2 = require(__dirname + '/../../config/db2.config.json')[env];
const db = {};

/** Add Databases**/
db.sequelize1 = new Sequelize(config1.database, config1.username, config1.password, config1);
db.sequelize2 = new Sequelize(config2.database, config2.username, config2.password, config2);

/**Add the Database Models**/
// Add models from db1 folder
fs
  .readdirSync(__dirname + '/db1')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(db.sequelize1, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Add models from db2 folder
fs
  .readdirSync(__dirname + '/db2')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(db.sequelize2, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;

module.exports = db;
