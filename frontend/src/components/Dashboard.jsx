import { useEffect, useState } from "react"
import { getDashboard } from "../services/api"

export default function Dashboard(){

 const [stats,setStats] = useState({
  total:0,
  visits:0,
  booked:0
 })

 useEffect(()=>{
  load()
 },[])

 const load = async()=>{
  try{
   const res = await getDashboard()
   setStats(res.data)
  }catch(err){
   console.error("Dashboard error:", err)
  }
 }


 const scrollToSection = (id)=>{
  const element = document.getElementById(id)

  if(element){
   element.scrollIntoView({
    behavior:"smooth",
    block:"start"
   })
  }
 }

 return(

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

 
 <div
  className="card cursor-pointer hover:shadow-lg transition"
  onClick={()=>scrollToSection("leads")}
 >

 <p className="text-gray-500 text-sm">
 Total Leads
 </p>

 <h2 className="text-3xl font-bold">
 {stats.total}
 </h2>

 </div>


 
 <div
  className="card cursor-pointer hover:shadow-lg transition"
  onClick={()=>scrollToSection("visits")}
 >

 <p className="text-gray-500 text-sm">
 Visits Scheduled
 </p>

 <h2 className="text-3xl font-bold">
 {stats.visits}
 </h2>

 </div>


 
 <div
  className="card cursor-pointer hover:shadow-lg transition"
  onClick={()=>scrollToSection("bookings")}
 >

 <p className="text-gray-500 text-sm">
 Bookings
 </p>

 <h2 className="text-3xl font-bold text-green-600">
 {stats.booked}
 </h2>

 </div>

 </div>

 )

}