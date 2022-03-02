const { DataTypes } = require('sequelize')

const { sequelize } = require('../utils/database')

const Todos = sequelize.define('todo', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    }
})