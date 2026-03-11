import { useEffect,useState } from "react"
import { getLeads } from "../services/api"

const stages=[
"New Lead",
"Contacted",
"Requirement Collected",
"Property Suggested",
"Visit Scheduled",
"Visit Completed",
"Booked",
"Lost"
]

export default function Pipeline(){

 const [leads,setLeads]=useState([])

 useEffect(()=>{
  load()
 },[])

 const load = async()=>{
  const res = await getLeads()
  setLeads(res.data)
 }

 return(

 <div className="flex gap-4 overflow-x-auto pb-4">

 {stages.map(stage=>(

 <div key={stage}
 className="min-w-[180px] bg-gray-50 border rounded-xl p-4">

 <h3 className="font-semibold text-sm mb-3">
 {stage}
 </h3>

 {leads
 .filter(l=>l.status===stage)
 .map(lead=>(

 <div
 key={lead._id}
 className="bg-white border rounded-lg p-3 mb-2 shadow-sm">

 <p className="font-medium text-sm">
 {lead.name}
 </p>

 <p className="text-xs text-gray-500">
 {lead.phone}
 </p>



 {lead.property && (
  <p className="text-xs text-blue-600 mt-1">
   {lead.property}
  </p>
 )}



 {lead.visitDate && (
  <p className="text-xs text-gray-500">
   {new Date(lead.visitDate).toLocaleDateString()}
  </p>
 )}

 </div>

 ))}

 </div>

 ))}

 </div>

 )

}