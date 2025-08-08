const {DataTypes} = require('sequelize');

const Database = require('../config/database');


const RatingSchema = Database.define('rating', {
  id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
  },
    rate: DataTypes.FLOAT,
    userid: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    category: DataTypes.STRING,
    categoryid : DataTypes.INTEGER,
    deletedAt: DataTypes.DATE,
});

module.exports = RatingSchema;