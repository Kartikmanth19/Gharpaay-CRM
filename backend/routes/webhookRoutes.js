const express = require("express")
const router = express.Router()

const { tallyWebhook, whatsappWebhook } = require("../controllers/webhookController")

router.post("/tally-webhook", tallyWebhook)

router.post("/whatsapp-webhook", whatsappWebhook)

router.get("/whatsapp-webhook", (req, res) => {
    res.send("WhatsApp webhook working")
})

router.get("/tally-webhook", (req, res) => {
    res.send("Tally webhook working")
})

module.exports = router