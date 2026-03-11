import { FaHome, FaUsers, FaChartBar } from "react-icons/fa"

export default function Sidebar(){

 const scrollTo = (id)=>{
  const section = document.getElementById(id)
  if(section){
   section.scrollIntoView({ behavior: "smooth" })
  }
 }

 return(

 <div className="h-full p-6">

 <h1 className="text-xl font-bold mb-10">
  Gharpayy CRM
 </h1>

 <nav className="space-y-6 text-gray-700">

 <div
  onClick={()=>scrollTo("dashboard")}
  className="flex items-center gap-3 cursor-pointer hover:text-blue-600"
 >
 <FaHome/>
 Dashboard
 </div>

 <div
  onClick={()=>scrollTo("leads")}
  className="flex items-center gap-3 cursor-pointer hover:text-blue-600"
 >
 <FaUsers/>
 Leads
 </div>

 <div
  onClick={()=>scrollTo("analytics")}
  className="flex items-center gap-3 cursor-pointer hover:text-blue-600"
 >
 <FaChartBar/>
 Analytics
 </div>

 </nav>

 </div>

 )

}