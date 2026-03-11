import axios from "axios"

const API = axios.create({
    baseURL: "https://gharpayy-crm-backend.onrender.com/api"
})

export const getDashboard = () => API.get("/dashboard")

export const getLeads = () => API.get("/leads")

export const createLead = (data) => API.post("/leads", data)

export const updateLeadStage = (id, status) =>
    API.put(`/leads/status/${id}`, { status })

export const updateAgent = (id, assignedAgent) =>
    API.put(`/leads/agent/${id}`, { assignedAgent })

export const scheduleVisit = (data) =>
    API.post("/visits", data)

export const updateVisitOutcome = (id, outcome) =>
    API.put(`/visits/${id}/outcome`, { outcome })

export default API