const Lead = require("../models/Lead")

exports.getStats = async (req, res) => {

    const total = await Lead.countDocuments()

    const booked = await Lead.countDocuments({ status: "Booked" })

    const visits = await Lead.countDocuments({ status: "Visit Scheduled" })

    const stages = await Lead.aggregate([
        {
            $group: {
                _id: "$status",
                count: { $sum: 1 }
            }
        }
    ])

    res.json({
        total,
        booked,
        visits,
        stages
    })

}