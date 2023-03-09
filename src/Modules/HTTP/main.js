const express = require('express')
const app = express()
const server = require('http').createServer(app)
const BodyParser = require('body-parser')
const CookieParser = require('cookie-parser')
const fs = require('fs')
const colors = require('colors')

console.clear()

const config = require('../../config.json')

app.set('view engine', 'ejs');
app.set('views', './src/Modules/HTTP/view');
app.use(express.static('./src/Modules/HTTP/public', { index: false, extensions: ['html'] }));
app.use(BodyParser.urlencoded({ extended: false }));
app.use(CookieParser());

fs.readdir("./src/Modules/HTTP/Controllers/", (err, files) => {
    if (err) return console.log(`[i]`.red + ` - Erro no sistema de routers: ${err}`)

    files.forEach((r) => {
        var Router = require("./Controllers/" + r)
        app.use('/', Router)
    })
})

function StartWebService() {
    return new Promise((resolve, reject) => {
        try {
            server.listen(config.webserver.port, () => {
                console.log(`[WEBSERVER]`.green + ` Servidor web iniciado em ` + `http://127.0.0.1:${config.webserver.port}\n`.blue);
                resolve()
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = { StartWebService }