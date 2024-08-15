import "./Header.css"
import { SunIcon } from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <div className="border border-red w-full h-full flex items-center justify-end gap-24 px-12">
      My awesome resume page
      <button>a-</button>
      <button>A+</button>
      {/* TODO botar um toogle para mudar entre sol e lua. Talvez fazer um
       slider que vai alterando gradativamente do modo claro ao escuro */}
      <button className="s">
        <SunIcon className="sun w-8 h-8 stroke-yellow-400" />
      </button>
    </div>
  )
}

export default Header
