const express = require('express')
const aiRoutes = require('./routes/ai.routes')

const app = express()

app.get('/' , (req, res, next) => {
    res.send("Hello, World")
})

app.use("/ai", aiRoutes)
module.exports = app