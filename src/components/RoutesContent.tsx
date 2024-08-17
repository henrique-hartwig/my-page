import { Route, Routes } from "react-router-dom"
import Education from "./Education"
import Experiences from "./Experiences"
import Home from "./Home"

const RoutesContent = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experiences" element={<Experiences />} />
    </Routes>
  )
}

export default RoutesContent
