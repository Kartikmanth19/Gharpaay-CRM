require("dotenv").config()
const express = require("express")
const cors = require("cors")
const webhookRoutes = require("./routes/webhookRoutes")
const visitRoutes = require("./routes/visitRoutes")

const connectDB = require("./config/db")
const leadRoutes = require("./routes/leadRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")

const startReminderJob = require("./services/reminderService")

const app = express()

connectDB()

startReminderJob()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Gharpayy CRM Backend Running Successfully 🚀")
})

app.use("/api", leadRoutes)
app.use("/api", dashboardRoutes)
app.use("/api", webhookRoutes)
app.use("/api", visitRoutes)

app.listen(5000, () => {
    console.log("Server running on port 5000")
})