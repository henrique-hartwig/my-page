import "./App.css"
import Header from "./components/Header"
import MenuSider from "./components/MenuSider"

function App() {
  return (
    <div className="page">
      <div className="header border border-yellow-400">
        <Header />
      </div>
      <div className="aside border border-red-500">
        <MenuSider />
      </div>
      <div className="content boder border-purple-600">CONTENT</div>
      <div className="footer boder border border-black">FOOTER</div>
    </div>
  )
}

export default App
