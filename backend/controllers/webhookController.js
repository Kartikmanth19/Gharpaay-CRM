const Lead = require("../models/Lead")
const assignAgent = require("../services/assignmentService")

exports.tallyWebhook = async (req, res) => {

    try {

        const { name, phone } = req.body

        const assignedAgent = await assignAgent()

        const lead = await Lead.create({
            name,
            phone,
            source: "Tally Form",
            assignedAgent,
            status: "New Lead"
        })

        res.json({
            message: "Lead created from Tally",
            lead
        })

    } catch (err) {

        console.error(err)

        res.status(500).json({ error: "Webhook failed" })

    }

}


exports.whatsappWebhook = async (req, res) => {

    try {

        const { name, phone } = req.body

        const assignedAgent = await assignAgent()

        const lead = await Lead.create({
            name,
            phone,
            source: "WhatsApp",
            assignedAgent,
            status: "New Lead"
        })

        res.json({
            message: "Lead created from WhatsApp",
            lead
        })

    } catch (err) {

        console.error(err)

        res.status(500).json({ error: "Webhook failed" })

    }

}