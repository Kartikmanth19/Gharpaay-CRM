import { useState } from "react"
import axios from "axios"

export default function VisitScheduler({ leadId }) {

  const [property, setProperty] = useState("")
  const [date, setDate] = useState("")

  const scheduleVisit = async () => {

    await axios.post(
      `http://localhost:5000/api/visit/${leadId}`,
      {
        property,
        date
      }
    )

    alert("Visit Scheduled")

  }

  return (

    <div className="p-4 bg-white shadow rounded">

      <h3 className="font-semibold mb-3">
        Schedule Visit
      </h3>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Property"
        value={property}
        onChange={(e) =>
          setProperty(e.target.value)
        }
      />

      <input
        type="datetime-local"
        className="border p-2 w-full mb-2"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

      <button
        onClick={scheduleVisit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Schedule
      </button>

    </div>

  )
}