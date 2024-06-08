import { Link } from "react-router-dom"
import logo from '../../assets/img/bookhub_logo-removebg-preview.png';

export const HeaderTitle = () => {
  return (
    <header className="flex">
      <div className="w-44">
        <Link to="/">
          <img src={logo} alt="Logo Bookhub" className="w-full" />
        </Link>
      </div>
    </header>
  )  
}
  

