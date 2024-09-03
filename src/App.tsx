import "./App.css"
import { Header, MenuSider } from "./components"
import Footer from "./components/Footer"
import RoutesContent from "./components/RoutesContent"
import { useContext, useEffect } from "react"
import { ThemeContext } from "./context/ThemeContext"

function App() {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className="page border-2">
      <Header />
      <MenuSider />
      <RoutesContent />
      <Footer />
    </div>
  )
}

export default App
