import { useState } from "react"
import { createLead } from "../services/api"

export default function LeadForm(){

 const [form,setForm] = useState({
  name:"",
  phone:"",
  source:"Website"
 })

 const handleChange = (e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }

 const submit = async(e)=>{
  e.preventDefault()

  await createLead(form)

  alert("Lead Captured Successfully")
 }

 return(

  <div className="card">

  <h2 className="font-semibold mb-4">New Lead</h2>

  <form onSubmit={submit} className="space-y-3">

   <input
    name="name"
    placeholder="Name"
    onChange={handleChange}
    className="border p-2 rounded w-full"
   />

   <input
    name="phone"
    placeholder="Phone"
    onChange={handleChange}
    className="border p-2 rounded w-full"
   />

   <select
    name="source"
    onChange={handleChange}
    className="border p-2 rounded w-full"
   >
    <option>Website</option>
    <option>WhatsApp</option>
    <option>Social Media</option>
    <option>Phone Call</option>
   </select>

   <button className="bg-blue-600 text-white px-4 py-2 rounded">
    Capture Lead
   </button>

  </form>

  </div>

 )
}