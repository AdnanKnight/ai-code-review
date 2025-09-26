const express = require("express")
const aiController = require("../controller/ai.controller")


const Router = express.Router()

Router.post("/get-review", aiController.getReview)


module.exports = Router;