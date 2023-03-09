const Sequelize = require("sequelize");
const { connection } = require("./mysql")

const orders = connection.define('orders', {
    email: {
        type: Sequelize.STRING,
        Allownull: true
    },
    code: {
        type: Sequelize.STRING,
        Allownull: true
    },
    price: {
        type: Sequelize.FLOAT,
        Allownull: true
    },
    productId: {
        type: Sequelize.TINYINT,
        Allownull: true
    },
    paymentMethod: {
        type: Sequelize.TINYINT,
        Allownull: true
    },
    status: {
        type: Sequelize.TINYINT,
        Allownull: true
    },
    createTimestamp: {
        type: Sequelize.BIGINT,
        Allownull: true
    }
}, {
    timestamps: false,
    freezeTableName: true
})

module.exports = { orders }