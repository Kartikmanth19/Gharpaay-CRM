const mongoose = require("mongoose")

const LeadSchema = new mongoose.Schema({

    name: String,

    phone: String,

    source: String,

    assignedAgent: String,

    status: {
        type: String,
        default: "New Lead"
    },

    property: String,

    visitDate: Date,

    visitOutcome: String,

    lastActivity: {
        type: Date,
        default: Date.now
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Lead", LeadSchema)