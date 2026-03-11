import { useEffect, useState } from "react"
import { getLeads } from "../services/api"

export default function Leaderboard() {

  const [leaders, setLeaders] = useState([])

  useEffect(() => {
    load()
  }, [])

  const load = async () => {

    try {

      const res = await getLeads()

      const leads = res.data

      const map = {}

      leads.forEach(l => {

        const agent = l.assignedAgent || "Unassigned"

        if (!map[agent]) map[agent] = 0

        if (l.status === "Booked") {
          map[agent]++
        }

      })

      const arr = Object.entries(map).map(([agent, count]) => ({
        agent,
        count
      }))
      arr.sort((a, b) => b.count - a.count)

      setLeaders(arr)

    } catch (error) {
      console.log(error)
    }

  }

  return (

    <div className="card">

      <h2 className="font-semibold mb-4">
        Agent Leaderboard
      </h2>

      {leaders.length === 0 ? (

        <p className="text-gray-400 text-sm">
          No leaderboard data yet
        </p>

      ) : (

        <div className="space-y-2 text-sm">

          {leaders.map((l, i) => (

            <div
              key={i}
              className="flex justify-between border-b pb-2"
            >

              <span>
                {l.agent}
              </span>

              <span className="font-semibold text-green-600">
                {l.count}
              </span>

            </div>

          ))}

        </div>

      )}

    </div>

  )

}