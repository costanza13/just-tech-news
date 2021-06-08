const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the User model
class User extends Model {}

// define table columns and configuration
User.init(
  {
    id: {
      // use the special Sequelize DataTypes object to specify what type it is
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // password must be at least 4 characters long
        len: [4]
      }
    }
  },
  {
    // table configuraiton options

    // pass in the imported sequelize database connection
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camelCasing
    underscored: true,
    // make model name lowercase in the db
    modelName: 'user'
  }
);

module.exports = User;
