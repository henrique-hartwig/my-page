import "./App.css"
import MainHeader from "./components/MainHeader"
import MenuSider from "./components/MenuSider"

function App() {
  return (
    <div className="page">
      <div className="header border border-yellow-400">
        <MainHeader />
      </div>
      <div className="aside m-2 border border-red-500">
        <MenuSider />
      </div>
      <div className="content boder border-purple-600">CONTENT</div>
      <div className="footer boder border border-black">FOOTER</div>
    </div>
  )
}

export default App
