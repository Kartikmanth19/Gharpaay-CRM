const Lead = require("../models/Lead")

const agents = ["Aman", "Neha", "Rohit"]

const assignAgent = async () => {

    let counts = {}

    for (let agent of agents) {

        const c = await Lead.countDocuments({
            assignedAgent: agent,
            status: { $ne: "Booked" }
        })

        counts[agent] = c

    }

    const leastBusy = Object.keys(counts).reduce((a, b) =>
        counts[a] < counts[b] ? a : b
    )

    return leastBusy
}

module.exports = assignAgent