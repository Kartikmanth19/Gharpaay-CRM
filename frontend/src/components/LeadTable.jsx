import { useEffect, useState } from "react"
import { getLeads, updateLeadStage } from "../services/api"
import { updateAgent } from "../services/api"
import { scheduleVisit } from "../services/api"

const stages = [
  "New Lead",
  "Contacted",
  "Requirement Collected",
  "Property Suggested",
  "Visit Scheduled",
  "Visit Completed",
  "Booked",
  "Lost"
]

export default function LeadTable(){

  const [leads, setLeads] = useState([])

  useEffect(()=>{
    loadLeads()
  },[])

  const loadLeads = async ()=>{
    try{
      const res = await getLeads()
      setLeads(res.data)
    }catch(err){
      console.error("Error loading leads:", err)
    }
  }

  const changeStage = async(id, status)=>{
    try{
      await updateLeadStage(id, status)
      loadLeads()
    }catch(err){
      console.error("Stage update failed:", err)
    }
  }

  const changeAgent = async(id, agent)=>{
    try{
      await updateAgent(id, agent)
      loadLeads()
    }catch(err){
      console.error("Agent update failed:", err)
    }
  }

  const handleVisitSchedule = async (leadId) => {

    const property = prompt("Enter property name")
    const visitDate = prompt("Enter visit date (YYYY-MM-DD)")
    const visitTime = prompt("Enter visit time (HH:MM)")

    if(!property || !visitDate || !visitTime) return

    const dateTime = `${visitDate}T${visitTime}`

    await scheduleVisit({
      leadId,
      property,
      visitDate: dateTime
    })

    loadLeads()
  }

  return(

    <div className="overflow-x-auto">

      <table className="w-full min-w-[700px] text-sm">

        <thead className="border-b text-gray-500">
          <tr>
            <th className="py-2 text-left">Name</th>
            <th>Phone</th>
            <th>Source</th>
            <th>Agent</th>
            <th>Property</th>
            <th>Visit Date & Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {leads.map((lead)=>(

            <tr key={lead._id} className="border-b hover:bg-gray-50">

              <td className="py-2">{lead.name}</td>
              <td>{lead.phone}</td>
              <td>{lead.source}</td>

              <td>
                <select
                  value={lead.assignedAgent || ""}
                  onChange={(e)=>changeAgent(lead._id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option value="">Select Agent</option>
                  <option value="Aman">Aman</option>
                  <option value="Neha">Neha</option>
                  <option value="Rohit">Rohit</option>
                </select>
              </td>


              <td>

                {lead.property ? (

                  lead.property

                ) : (

                  <button
                    onClick={()=>handleVisitSchedule(lead._id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Schedule Visit
                  </button>

                )}

              </td>


              <td>
                {lead.visitDate
                  ? new Date(lead.visitDate).toLocaleString()
                  : "-"}
              </td>

  
              <td>
                <select
                  value={lead.status}
                  onChange={(e)=>changeStage(lead._id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  {stages.map((s)=>(
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}