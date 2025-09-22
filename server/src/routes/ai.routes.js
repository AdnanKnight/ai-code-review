const express = require("express")
const aiController = require("../controller/ai.controller")


const Router = express.Router()

Router.get("/get-response", aiController.getResponse)



module.exports = Router;