import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import MenuSider from "./components/MenuSider"
import Education from "./components/Education"
import Experiences from "./components/Experiences"
import Home from "./components/Home"

function App() {
  return (
    <div className="page h-full border-2">
      <Header />
      <MenuSider />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </BrowserRouter>
      <div className="footer boder border border-black">FOOTER</div>
    </div>
  )
}

export default App
