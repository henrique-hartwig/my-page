import { useNavigate } from "react-router-dom"

const MenuSider = () => {
  const navigate = useNavigate()

  return (
    <div className="aside border border-red-500 py-10 rounded-3xl flex items-start justify-center">
      <ul className="flex flex-col gap-4 hover:cursor-pointer items-end">
        <li
          className="hover:border hover:rounded-xl hover:shadow-lg hover:scale-110 transition transform duration-200"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li onClick={() => navigate("/education")}>Education</li>
        <li onClick={() => navigate("/experiences")}>Experiences</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>
    </div>
  )
}

export default MenuSider
