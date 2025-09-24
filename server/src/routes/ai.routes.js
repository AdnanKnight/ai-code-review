const express = require("express")
const aiController = require("../controller/ai.controller")


const Router = express.Router()

Router.get("/get-response", aiController.getResponse)

Router.get("/help", (req, res, next) => {
    res.send("Its just a dummy route to save my Git Log")
})

module.exports = Router;