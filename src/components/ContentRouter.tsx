import { BrowserRouter, Route, Routes } from "react-router-dom"
import Education from "./Education"
import Experiences from "./Experiences"
import Home from "./Home"

const ContentRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    </BrowserRouter>
  )
}

export default ContentRouter
