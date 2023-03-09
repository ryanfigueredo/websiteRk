const Sequelize = require("sequelize");
const config = require('../../config.json')

const connection = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
    host: config.mysql.host,
    port: config.mysql.port,
    dialect: 'mysql',
    logging: false
})

module.exports = { connection };