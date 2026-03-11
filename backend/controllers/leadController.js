const Lead = require("../models/Lead")
const Activity = require("../models/Activity")
const assignAgent = require("../services/assignmentService")

exports.createLead = async (req, res) => {

    try {

        const { name, phone, source } = req.body

        const assignedAgent = await assignAgent()

        const lead = await Lead.create({
            name,
            phone,
            source,
            assignedAgent,
            status: "New Lead"
        })

        await Activity.create({
            leadId: lead._id,
            message: "Lead created"
        })

        res.json(lead)

    } catch (err) {

        res.status(500).json({ error: "Failed to create lead" })

    }

}


exports.getLeads = async (req, res) => {

    try {

        const leads = await Lead.find().sort({ createdAt: -1 })

        res.json(leads)

    } catch (err) {

        res.status(500).json({ error: "Failed to fetch leads" })

    }

}


exports.updateStage = async (req, res) => {
    try {

        const { status } = req.body

        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            { status, lastActivity: new Date() },
            { returnDocument: "after" }
        )

        await Activity.create({
            leadId: lead._id,
            message: `Stage moved to ${status}`
        })

        res.json(lead)

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Failed to update lead" })
    }
}

exports.updateAgent = async (req, res) => {

    try {

        const { assignedAgent } = req.body

        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            { assignedAgent },
            { returnDocument: "after" }
        )

        await Activity.create({
            leadId: lead._id,
            message: `Agent changed to ${assignedAgent}`
        })

        res.json(lead)

    } catch (err) {

        res.status(500).json({ error: "Failed to update agent" })

    }

}
