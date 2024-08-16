import "./App.css"
import Header from "./components/Header"
import MenuSider from "./components/MenuSider"

import Footer from "./components/Footer"
import ContentRouter from "./components/ContentRouter"

function App() {
  return (
    <div className="page h-full border-2">
      <Header />
      <MenuSider />
      <ContentRouter />
      <Footer />
    </div>
  )
}

export default App
