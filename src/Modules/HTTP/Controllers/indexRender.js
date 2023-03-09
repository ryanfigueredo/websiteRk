const Router = require("express").Router()
const colors = require('colors')

Router.get("/", async (req, res) => {
    return res.render('index')
})

Router.get("/buy", async (req, res) => {
    return res.render('buy')
})

Router.get("/tos", async (req, res) => {
    return res.render('tos')
})

module.exports = Router;