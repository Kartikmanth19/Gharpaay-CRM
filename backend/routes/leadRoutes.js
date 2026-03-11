const express = require("express")
const router = express.Router()

const {
    createLead,
    getLeads,
    updateStage,
    updateAgent
} = require("../controllers/leadController")

router.post("/leads", createLead)
router.get("/leads", getLeads)
router.put("/leads/agent/:id", updateAgent)
router.put("/leads/status/:id", updateStage)


module.exports = router