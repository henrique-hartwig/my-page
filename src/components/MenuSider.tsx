import { useNavigate } from "react-router-dom"

const MenuSider = () => {
  const navigate = useNavigate()

  return (
    <div className="aside border border-red-500">
      MenuSider
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/education")}>Education</li>
        <li onClick={() => navigate("/experiences")}>Experiences</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>
    </div>
  )
}

export default MenuSider
