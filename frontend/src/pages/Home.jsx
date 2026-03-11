import Dashboard from "../components/Dashboard"
import Pipeline from "../components/Pipeline"
import LeadTable from "../components/LeadTable"
import Leaderboard from "../components/Leaderboard"
import ConversionChart from "../components/ConversionChart"
import { useEffect,useState } from "react"
import { getDashboard } from "../services/api"

export default function Home(){

 const [stats,setStats]=useState({ stages:[] })

 useEffect(()=>{
  load()
 },[])

 const load = async()=>{
  const res = await getDashboard()
  setStats(res.data)
 }

 return(

 <div className="space-y-8">

 <Dashboard/>

 <ConversionChart stages={stats.stages}/>

 <Pipeline/>

 <div className="grid grid-cols-3 gap-6">

 <div className="col-span-2 card">

 <LeadTable/>

 </div>

 <Leaderboard/>

 </div>

 </div>

 )

}