const express = require('express')
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "https://your-frontend.vercel.app"],
    credentials: true
}))

app.get('/', (req, res, next) => {
    res.send("Hello, World")
})

app.use("/ai", aiRoutes)

module.exports = app