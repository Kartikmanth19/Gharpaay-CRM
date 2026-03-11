const Lead = require("../models/Lead")

exports.scheduleVisit = async (req, res) => {

    try {

        const { leadId, property, visitDate } = req.body

        const lead = await Lead.findById(leadId)

        lead.property = property
        lead.visitDate = visitDate
        lead.status = "Visit Scheduled"
        lead.lastActivity = new Date()

        await lead.save()

        res.json(lead)

    } catch (err) {
        res.status(500).json({ error: "Visit scheduling failed" })
    }

}


exports.visitOutcome = async (req, res) => {

    try {

        const { outcome } = req.body

        const lead = await Lead.findById(req.params.id)

        lead.visitOutcome = outcome
        lead.status = "Visit Completed"
        lead.lastActivity = new Date()

        await lead.save()

        res.json(lead)

    } catch (err) {
        res.status(500).json({ error: "Visit outcome update failed" })
    }

}