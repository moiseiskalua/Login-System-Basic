import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Private from "./pages/Private"
import RequireAuth from "./contexts/Auth/RequireAuth"

function App() {

  return (
    <>
    <div>
      <header className="flex flex-col w-full text-center">
        <h1 className="m-4">Header</h1>
        <nav className="flex gap-5 justify-center mb-2">
          <Link to="/">Home</Link>
          <Link to="/private">Private</Link>
        </nav>
      </header>
    </div>
    <div className="text-center">
      <hr/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>
    </div>
    </>
  )
}

export default App
