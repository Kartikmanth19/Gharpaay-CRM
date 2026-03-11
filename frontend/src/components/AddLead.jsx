import { useState } from "react"
import { createLead } from "../services/api"

export default function AddLead({ refresh }) {

 const [form, setForm] = useState({
  name:"",
  phone:"",
  source:"Website Form"
 })

 const handleChange = (e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }

 const handleSubmit = async(e)=>{
  e.preventDefault()

  await createLead(form)

  setForm({
   name:"",
   phone:"",
   source:"Website Form"
  })

  refresh()
 }

 return(

 <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">

  <h2 className="text-lg font-semibold mb-3">Add Lead</h2>

  <input
   name="name"
   placeholder="Name"
   value={form.name}
   onChange={handleChange}
   className="border p-2 mr-2"
   required
  />

  <input
   name="phone"
   placeholder="Phone"
   value={form.phone}
   onChange={handleChange}
   className="border p-2 mr-2"
   required
  />

  <select
   name="source"
   value={form.source}
   onChange={handleChange}
   className="border p-2 mr-2"
  >

   <option>Website Form</option>
   <option>WhatsApp</option>
   <option>Tally Form</option>
   <option>Phone Call</option>

  </select>

  <button className="bg-blue-500 text-white px-4 py-2 rounded">
   Add Lead
  </button>

 </form>

 )

}