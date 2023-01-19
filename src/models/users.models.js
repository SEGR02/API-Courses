const db = require('../utils/database');
const { DataTypes } = require('sequelize');

// usaremos el metodo define de sequelize
// recibe dos parametros 
//nombre de la tabla y sus atributos (elementos de adentro id, username etc)

const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    field: "first_name"
  },
  lastName: {
    type: DataTypes.STRING,
    field: "last_name"
  },
  password: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  }
})

module.exports = Users;