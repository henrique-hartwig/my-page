import { useNavigate } from "react-router-dom"


type StyledLiProps = {
  label: string
  navigateTo: () => void
}

const StyledLi = ({ label, navigateTo }: StyledLiProps) => {
  return (
    <li
      className="hover:border hover:rounded-xl hover:shadow-lg hover:scale-110 transition transform duration-200"
      onClick={navigateTo}
    >
      {label}
    </li>
  )
}

const MenuSider = () => {
  const navigate = useNavigate()

  return (
    <div className="aside border border-red-500 py-10 rounded-3xl flex items-start justify-center">
      <ul className="flex flex-col gap-4 hover:cursor-pointer items-end">
        <StyledLi label="Home" navigateTo={() => navigate("/")} />
        <StyledLi label="Education" navigateTo={() => navigate("/education")} />
        <StyledLi
          label="Experiences"
          navigateTo={() => navigate("/experiences")}
        />
        <StyledLi label="Contact" navigateTo={() => navigate("/contact")} />
      </ul>
    </div>
  )
}

export default MenuSider
