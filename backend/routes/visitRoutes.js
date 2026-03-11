const express = require("express")
const router = express.Router()

const { scheduleVisit } = require("../controllers/visitController")

router.post("/visits", scheduleVisit)

router.get("/visits", (req, res) => {
    res.send("Visit API working")
})

module.exports = router