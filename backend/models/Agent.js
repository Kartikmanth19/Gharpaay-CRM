const mongoose = require("mongoose")

const AgentSchema = new mongoose.Schema({

    name: String,

    email: String,

    activeLeads: {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model("Agent", AgentSchema)