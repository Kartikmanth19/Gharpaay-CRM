import { useState } from "react"
import { FaBars } from "react-icons/fa"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"

export default function App() {

  const [open, setOpen] = useState(false)

  return (

    <div className="grid md:grid-cols-[260px_1fr] min-h-screen bg-[#f5f7fb]">



      <aside
        className={`bg- border-r border-gray-200 h-fu
         md:relative z-40 w-64 md:w-full
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-300 shadow-sm`}
      >

        <Sidebar />

      </aside>




      <div className="grid flex-col w-full">



        <div className="md:hidden flex items-center gap-4 bg-white border-b border-gray-200 p-4 shadow-sm">

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <FaBars size={20} />
          </button>

          <h1 className="font-semibold text-gray-700">
            Gharpayy CRM
          </h1>

        </div>




        <main className="flex-1 overflow-y-auto p-4 md:p-8">

          <Home />

        </main>

      </div>

    </div>

  )
}