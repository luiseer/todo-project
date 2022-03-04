const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    port: 5432,
    dialect: 'postgres'
})

module.exports = { sequelize }