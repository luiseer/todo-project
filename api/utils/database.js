const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    dialect: 'postgres'
})

module.exports = { sequelize }