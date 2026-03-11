const router = require("express").Router()

const { getStats } = require("../controllers/dashboardController")

router.get("/dashboard", getStats)

module.exports = router