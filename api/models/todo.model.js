const { DataTypes } = require('sequelize')

const { sequelize } = require('../utils/database')

const ToDo = sequelize.define('todo', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'active'
    }
})
module.exports = { ToDo }