// import Dashboard from "../components/Dashboard"
import LeadTable from "../src/components/LeadTable"
import Pipeline from "../src/components/Pipeline"
import Leaderboard from "../src/components/Leaderboard"
import Dashboard from "../src/components/Dashboard"

export default function Home() {

  return (

    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">
        Gharpayy CRM
      </h1>

      <Dashboard />

      <Pipeline />

      <LeadTable />

      <Leaderboard />

    </div>

  )
}