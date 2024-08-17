import "./App.css"
import Header from "./components/Header"
import MenuSider from "./components/MenuSider"

import Footer from "./components/Footer"
import RoutesContent from "./components/RoutesContent"

function App() {
  return (
    <div className="page h-full border-2">
      <Header />
      <MenuSider />
      <RoutesContent />
      <Footer />
    </div>
  )
}

export default App
