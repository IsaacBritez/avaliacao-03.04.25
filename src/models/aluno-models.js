// filepath: /home/professor/Projetos/user-api-v2/src/models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Aluno = sequelize.define('Aluno', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.STRING,
    allowNull: false,
  }  
});

module.exports = Aluno;