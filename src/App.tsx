import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import MenuSider from "./components/MenuSider"
import Education from "./components/Education"

function App() {
  return (
    <div className="page">
      <div className="header border border-yellow-400">
        <Header />
      </div>
      <div className="aside border border-red-500">
        <MenuSider />
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="content boder border-purple-600">CONTENT</div>
            }
          />
          <Route path="education" element={<Education />} />
        </Routes>
      </BrowserRouter>
      <div className="footer boder border border-black">FOOTER</div>
    </div>
  )
}

export default App
