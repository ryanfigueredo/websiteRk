const nodemailer = require('nodemailer')

const config = require('../../config.json')

let transporter = nodemailer.createTransport(config.smptServer)

module.exports = {
    
}