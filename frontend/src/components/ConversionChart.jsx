import { Bar } from "react-chartjs-2"
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend
} from "chart.js"

ChartJS.register(
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend
)

export default function ConversionChart({ stages }){

 const data = {

  labels: stages.map(s=>s._id),

  datasets:[

   {
    label:"Leads",
    data: stages.map(s=>s.count),
    backgroundColor:"#3b82f6"
   }

  ]

 }

 return(

 <div className="card">

  <h2 className="font-semibold mb-4">
   Lead Pipeline Analytics
  </h2>

  <Bar data={data}/>

 </div>

 )

}