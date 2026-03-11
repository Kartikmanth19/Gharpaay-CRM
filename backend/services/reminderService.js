const cron = require("node-cron")
const Lead = require("../models/Lead")

const startReminderJob = () => {

    cron.schedule("0 * * * *", async () => {

        const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)

        const leads = await Lead.find({
            lastActivity: { $lt: yesterday },
            status: { $ne: "Booked" }
        })

        leads.forEach(l => {
            console.log("Follow up needed:", l.name)
        })

    })

}

module.exports = startReminderJob